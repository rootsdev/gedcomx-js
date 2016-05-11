/**
 * A generic reference to a resource.
 * 
 * @constructor
 * @param {Object} json
 */
var ResourceReference = function(json){
  
  // Prevent errors when creating an object without using `new`
  var instance = Object.create(ResourceReference.prototype);
  
  if(json){
    if(json.resource){
      instance.resource = json.resource;
    }
  }
  
  return instance;
};

/**
 * Get the resource URI
 * 
 * @returns {String} Resource
 */
ResourceReference.prototype.getResource = function(){
  return this.resource;
};

/**
 * Set the resource URI
 * 
 * @param {String} uri
 * @returns {Object} this object
 */
ResourceReference.prototype.setResource = function(uri){
  this.resource = uri;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
ResourceReference.prototype.toJSON = function(){
  return {
    resource: this.getResource()
  };
};

module.exports = ResourceReference;