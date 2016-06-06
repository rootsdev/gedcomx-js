var ResourceReference = require('./ResourceReference'),
    Attribution = require('./Attribution'),
    utils = require('./utils');

/**
 * A generic reference to a resource.
 * 
 * @constructor
 * @param {Object} [json]
 */
var EvidenceReference = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof EvidenceReference)){
    return new EvidenceReference(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(ResourceReference.isInstance(json)){
    return json;
  }
  
  ResourceReference.call(this, json);
  
  if(json){
    this.setAttribution(json.attribution);
  }
};

EvidenceReference.prototype = Object.create(ResourceReference.prototype);

ResourceReference._gedxClass = ResourceReference.prototype._gedxClass = 'GedcomX.ResourceReference';

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
 * Get the attribution.
 * 
 * @returns {Attribution}
 */
EvidenceReference.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set the attribution
 * 
 * @param {Object|Attribution} attribution
 * @returns {EvidenceReference} This instance.
 */
EvidenceReference.prototype.setAttribution = function(attribution){
  if(attribution){
    this.attribution = new Attribution(attribution);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
EvidenceReference.prototype.toJSON = function(){
  var json = ResourceReference.prototype.toJSON.call(this);
  
  if(this.attribution){
    json.attribution = this.attribution.toJSON();
  }
  
  return json;
};

module.exports = EvidenceReference;