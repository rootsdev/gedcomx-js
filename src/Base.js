var utils = require('./utils');

/**
 * Base prototype that all other classes in this library extend
 * 
 * @class
 * @param {Object} [json]
 */
var Base = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Base)){
    return new Base(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Base.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Base._gedxClass = Base.prototype._gedxClass = 'GedcomX.Base';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Base.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Base} this
 */
Base.prototype.init = function(json){
  // Nothing to do here, yet. It is being called though by classes which extend
  // it in case we think of something to do in the future.
  return this;
};

/**
 * Set the value of a property that is an array. The new array is copied
 * by calling the associated addMethod on each value in the array.
 * 
 * @private
 * @param {Array} array New array that will be saved (copied)
 * @param {String} prop Property name where the array is found
 * @param {String} addMethod Name of the add method for this data
 * @return {Function} Generated function to be added to the prototype
 */
Base.prototype._setArray = function(array, prop, addMethod){
  if(Array.isArray(array)){
    this[prop] = [];
    var self = this;
    array.forEach(function(n){
      self[addMethod](n);
    });
  }
  return this;
};

/**
 * Add an object to an array at the given property. 
 * 
 * This method centralizes code for ensuring that the property is an array and
 * that the given data exists (isn't null or undefined). 
 * This method is designed to be used internally.
 * 
 * @private
 * @param {Object} data
 * @param {String} arrayName
 * @param {Fucntion} constructor
 * @return {ExtensibleData} This object
 */
Base.prototype._arrayPush = function(data, prop, constructor){
  if(data){
    if(constructor){
      data = constructor(data);
    }
    if(!Array.isArray(this[prop])){
      this[prop] = [];
    }
    this[prop].push(data);
  }
  return this;
};

/**
 * Internal helper method for constructing JSON when toJSON() is called.
 * 
 * Recursively call toJSON on properties that will be serialized, call toJSON on
 * the parent prototype, merge the two resulting objects together, and remove 
 * any remaining undefined properties.
 * 
 * @private
 * @param {Function} parent Parent prototype
 * @param {String[]} properties List of properties that will be serialized
 * @return {Object}
 */
Base.prototype._toJSON = function(parent, properties){
  return utils.removeEmpty(
    // toJSON MUST be called on all data before merging otherwise the merge method
    // will reaching into the class instances and extract data you might not want
    // to be serialized. The data will come out as a plain object and you will lose
    // the ability to detect that it hasn't been properly serialized.
    utils.merge(
      parent.prototype.toJSON.call(this), 
      utils.toJSON(utils.pick(this, properties))
    )
  );
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Base.prototype.toJSON = function(){
  return {};
};

module.exports = Base;