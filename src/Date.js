var ExtensibleData = require('./ExtensibleData');

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
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setOriginal(json.original);
    this.setFormal(json.formal);
  }
};

GDate.prototype = Object.create(ExtensibleData.prototype);

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
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.original){
    json.original = this.original;
  }
  
  if(this.formal){
    json.formal = this.formal;
  }
  
  return json;
};

module.exports = GDate;