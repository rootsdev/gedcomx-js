/**
 * A set of data that supports extension elements.
 * 
 * @constructor
 * @param {Object} json
 */
var ExtensibleData = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof ExtensibleData)){
    return new ExtensibleData(json);
  }
  
  if(json){
    this.setId(json.id);
  }
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
  var json = {};
  if(this.id){
    json.id = this.id;
  }
  return json;
};

module.exports = ExtensibleData;