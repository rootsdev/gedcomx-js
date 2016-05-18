/**
 * Qualifiers are used to supply additional details about a piece of data.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Qualifier = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Qualifier)){
    return new Qualifier(json);
  }
  
  if(json){
    this.setName(json.name);
    this.setValue(json.value);
  }
};

/**
 * Get the name
 * 
 * @returns {String} name
 */
Qualifier.prototype.getName = function(){
  return this.name;
};

/**
 * Set the name
 * 
 * @param {String} name
 * @returns {Qualifier} This instance.
 */
Qualifier.prototype.setName = function(name){
  this.name = name;
  return this;
};

/**
 * Get the value
 * 
 * @returns {String}
 */
Qualifier.prototype.getValue = function(){
  return this.value;
};

/**
 * Set the value
 * 
 * @param {String} value
 * @returns {Qualifier} This instance.
 */
Qualifier.prototype.setValue = function(value){
  this.value = value;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Qualifier.prototype.toJSON = function(){
  var json = {};
  
  if(this.name){
    json.name = this.name;
  }
  
  if(this.value){
    json.value = this.value;
  }
  
  return json;
};

module.exports = Qualifier;