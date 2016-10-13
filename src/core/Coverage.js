var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A description of the spatial and temporal coverage of a resource.
 * 
 * @class
 * @extends ExtensibleData
 * @apram {Object} [json]
 */
var Coverage = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Coverage)){
    return new Coverage(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Coverage.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Coverage.prototype = Object.create(GedcomX.ExtensibleData.prototype);

Coverage._gedxClass = Coverage.prototype._gedxClass = 'GedcomX.Coverage';

Coverage.jsonProps = [
  'spatial',
  'temporal'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Coverage.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Coverage} this
 */
Coverage.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
  if(json){
    this.setSpatial(json.spatial);
    this.setTemporal(json.temporal);
  }
  return this;
};

/**
 * Get the spatial coverage
 * 
 * @returns {PlaceReference}
 */
Coverage.prototype.getSpatial = function(){
  return this.spatial;
};

/**
 * Set the spatial coverage
 * 
 * @param {PlaceReference} spatial
 * @returns {Coverage}
 */
Coverage.prototype.setSpatial = function(spatial){
  if(spatial){
    this.spatial = GedcomX.PlaceReference(spatial);
  }
  return this;
};

/**
 * Get the temporal coverage
 * 
 * @returns {Date}
 */
Coverage.prototype.getTemporal = function(){
  return this.temporal;
};

/**
 * Set the temporal coverage
 * 
 * @param {Date} temporal
 * @returns {Coverage}
 */
Coverage.prototype.setTemporal = function(temporal){
  if(temporal){
    this.temporal = GedcomX.Date(temporal);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Coverage.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, Coverage.jsonProps);
};

module.exports = Coverage;