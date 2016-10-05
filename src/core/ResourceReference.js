var utils = require('../utils'),
    Base = require('../Base');

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
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(ResourceReference.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

ResourceReference.prototype = Object.create(Base.prototype);

ResourceReference._gedxClass = ResourceReference.prototype._gedxClass = 'GedcomX.ResourceReference';

ResourceReference.jsonProps = ['resource'];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
ResourceReference.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {ResourceReference} this
 */
ResourceReference.prototype.init = function(json){
  
  Base.prototype.init.call(this, json);
  
  if(json){
    this.setResource(json.resource);
  }
  return this;
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
  return this._toJSON(Base, ResourceReference.jsonProps);
};

module.exports = ResourceReference;