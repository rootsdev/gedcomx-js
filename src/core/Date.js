var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A date.
 * 
 * @constructor
 * @param {Object} [json]
 * @alias Date
 */
var GDate = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof GDate)){
    return new GDate(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(GDate.isInstance(json)){
    return json;
  }
  
  GedcomX.ExtensibleData.call(this, json);
  
  if(json){
    this.setOriginal(json.original);
    this.setFormal(json.formal);
  }
};

GDate.prototype = Object.create(GedcomX.ExtensibleData.prototype);

GDate._gedxClass = GDate.prototype._gedxClass = 'GedcomX.Date';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
GDate.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the original date value
 * 
 * @returns {String} original
 */
GDate.prototype.getOriginal = function(){
  return this.original;
};

/**
 * Set the original date value
 * 
 * @param {String} original
 * @returns {Date} This instance.
 */
GDate.prototype.setOriginal = function(original){
  this.original = original;
  return this;
};

/**
 * Get the formal date value
 * 
 * @returns {String}
 */
GDate.prototype.getFormal = function(){
  return this.formal;
};

/**
 * Set the formal date value
 * 
 * @param {String} formal
 * @returns {Date} This instance.
 */
GDate.prototype.setFormal = function(formal){
  this.formal = formal;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
GDate.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, [
    'original',
    'formal'
  ]);
};

module.exports = GDate;