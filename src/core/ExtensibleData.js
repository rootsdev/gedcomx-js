var utils = require('../utils'),
    Base = require('../Base');

/**
 * A set of data that supports extension elements.
 * 
 * @constructor
 * @param {Object} [json]
 */
var ExtensibleData = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof ExtensibleData)){
    return new ExtensibleData(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(ExtensibleData.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

ExtensibleData.prototype = Object.create(Base.prototype);

ExtensibleData._gedxClass = ExtensibleData.prototype._gedxClass = 'GedcomX.ExtensibleData';

ExtensibleData.jsonProps = ['id'];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
ExtensibleData.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {ExtensibleData} this
 */
ExtensibleData.prototype.init = function(json){
  
  Base.prototype.init.call(this, json);
  
  if(json){
    this.setId(json.id);
  }
  return this;
};

/**
 * Get the object's id.
 * 
 * @returns {String} Id 
 */
ExtensibleData.prototype.getId = function(){
  return this.id;
};

/**
 * Set the object's id.
 * 
 * @param {String} id
 * @return {ExtensibleData} This object, for chaining.
 */
ExtensibleData.prototype.setId = function(id){
  this.id = id;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
ExtensibleData.prototype.toJSON = function(){
  return this._toJSON(Base, ExtensibleData.jsonProps);
};

module.exports = ExtensibleData;