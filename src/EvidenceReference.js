var ResourceReference = require('./ResourceReference'),
    Attribution = require('./Attribution');

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
  
  ResourceReference.call(this, json);
  
  if(json){
    this.setAttribution(json.attribution);
  }
};

EvidenceReference.prototype = Object.create(ResourceReference.prototype);

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