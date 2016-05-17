var Conclusion = require('./Conclusion');

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
  
  Conclusion.call(this, json);
  
  if(json){
    this.setType(json.type);
  }
};

Gender.prototype = Object.create(Conclusion.prototype);

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
 * @params {String} gender
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