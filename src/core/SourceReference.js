var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A reference to a discription of a source.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#source-reference|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends ExtensibleData
 * @param {Object} [json]
 */
var SourceReference = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof SourceReference)){
    return new SourceReference(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(SourceReference.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

SourceReference.prototype = Object.create(GedcomX.ExtensibleData.prototype);

SourceReference._gedxClass = SourceReference.prototype._gedxClass = 'GedcomX.SourceReference';

SourceReference.jsonProps = [
  'description',
  'descriptionId',
  'attribution'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
SourceReference.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {SourceReference} this
 */
SourceReference.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
  if(json){
    this.setDescription(json.description);
    this.setDescriptionId(json.descriptionId);
    this.setAttribution(json.attribution);
  }
  return this;
};

/**
 * Get the description.
 * 
 * @returns {String}
 */
SourceReference.prototype.getDescription = function(){
  return this.description;
};

/**
 * Set the description.
 * 
 * @param {String} description
 * @returns {SourceReference} This instance.
 */
SourceReference.prototype.setDescription = function(description){
  this.description = description;
  return this;
};

/**
 * Get the description id.
 * 
 * @returns {String}
 */
SourceReference.prototype.getDescriptionId = function(){
  return this.descriptionId;
};

/**
 * Set the description id.
 * 
 * @param {String} descriptionId
 * @returns {SourceReference} This instance.
 */
SourceReference.prototype.setDescriptionId = function(descriptionId){
  this.descriptionId = descriptionId;
  return this;
};

/**
 * Get the attribution.
 * 
 * @returns {Attribution}
 */
SourceReference.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set the attribution
 * 
 * @param {Object|Attribution} attribution
 * @returns {SourceReference} This instance.
 */
SourceReference.prototype.setAttribution = function(attribution){
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
SourceReference.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, SourceReference.jsonProps);
};

module.exports = SourceReference;