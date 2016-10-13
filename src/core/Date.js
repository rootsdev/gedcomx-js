var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A date.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#conclusion-date|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends ExtensibleData
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
  
  this.init(json);
};

GDate.prototype = Object.create(GedcomX.ExtensibleData.prototype);

GDate._gedxClass = GDate.prototype._gedxClass = 'GedcomX.Date';

GDate.jsonProps = [
  'original',
  'formal'
];

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
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Date} this
 */
GDate.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
  if(json){
    this.setOriginal(json.original);
    this.setFormal(json.formal);
  }
  return this;
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
  return this._toJSON(GedcomX.ExtensibleData, GDate.jsonProps);
};

module.exports = GDate;