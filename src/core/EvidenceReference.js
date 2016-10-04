var GedcomX = require('../'),
    utils = require('../utils');

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
  if(GedcomX.ResourceReference.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

EvidenceReference.prototype = Object.create(GedcomX.ResourceReference.prototype);

EvidenceReference._gedxClass = EvidenceReference.prototype._gedxClass = 'GedcomX.ResourceReference';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
EvidenceReference.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {EvidenceReference} this
 */
EvidenceReference.prototype.init = function(json){
  
  GedcomX.ResourceReference.prototype.init.call(this, json);
  
  if(json){
    this.setAttribution(json.attribution);
  }
  return this;
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
    this.attribution = new GedcomX.Attribution(attribution);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
EvidenceReference.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ResourceReference, [
    'attribution'
  ]);
};

module.exports = EvidenceReference;