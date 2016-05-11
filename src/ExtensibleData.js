/**
 * A set of data that supports extension elements.
 * 
 * @constructor
 * @param {Object} json
 */
var ExtensibleData = function(json){
  
  // Prevent errors when creating an object without using `new`
  var instance = Object.create(ExtensibleData.prototype);
  
  if(json){
    if(json.id){
      instance.id = json.id;
    }
  }
  
  return instance;
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
 * @return {Object} This object, for chaining.
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
  return {
    id: this.getId()
  };
};

module.exports = ExtensibleData;