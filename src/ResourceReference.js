/**
 * A generic reference to a resource.
 * 
 * @constructor
 * @param {Object} [json]
 */
var ResourceReference = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof ResourceReference)){
    return new ResourceReference(json);
  }
  
  if(json){
    this.setResource(json.resource);
  }
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
 * @returns {ResourceReference} this object
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