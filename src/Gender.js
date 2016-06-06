var Conclusion = require('./Conclusion'),
    utils = require('./utils');

/**
 * A gender conclusion.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Gender = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Gender)){
    return new Gender(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Gender.isInstance(json)){
    return json;
  }
  
  Conclusion.call(this, json);
  
  if(json){
    this.setType(json.type);
  }
};

Gender.prototype = Object.create(Conclusion.prototype);

Gender._gedxClass = Gender.prototype._gedxClass = 'GedcomX.Gender';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Gender.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the gender type
 * 
 * @returns {String} gender
 */
Gender.prototype.getType = function(){
  return this.type;
};

/**
 * Set the gender type
 * 
 * @param {String} gender
 * @returns {Gender} This instance
 */
Gender.prototype.setType = function(gender){
  this.type = gender;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Gender.prototype.toJSON = function(){
  var json = Conclusion.prototype.toJSON.call(this);
  
  if(this.type){
    json.type = this.type;
  }
  
  return json;
};

module.exports = Gender;