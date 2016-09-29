var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A reference to a {@link PlaceDescription}.
 * 
 * @constructor
 * @param {Object} [json]
 */
var PlaceReference = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof PlaceReference)){
    return new PlaceReference(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(GedcomX.ExtensibleData.isInstance(json)){
    return json;
  }
  
  GedcomX.ExtensibleData.call(this, json);
  
  if(json){
    this.setOriginal(json.original);
    this.setDescription(json.description);
  }
};

PlaceReference.prototype = Object.create(GedcomX.ExtensibleData.prototype);

PlaceReference._gedxClass = PlaceReference.prototype._gedxClass = 'GedcomX.ExtensibleData';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
PlaceReference.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the original text
 * 
 * @returns {String} original
 */
PlaceReference.prototype.getOriginal = function(){
  return this.original;
};

/**
 * Set the original text
 * 
 * @param {String} original
 * @returns {PlaceReference} This instance.
 */
PlaceReference.prototype.setOriginal = function(original){
  this.original = original;
  return this;
};

/**
 * Get the description
 * 
 * @returns {String}
 */
PlaceReference.prototype.getDescription = function(){
  return this.description;
};

/**
 * Set the description
 * 
 * @param {String} description
 * @returns {PlaceReference} This instance.
 */
PlaceReference.prototype.setDescription = function(description){
  this.description = description;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
PlaceReference.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, [
    'original',
    'description'
  ]);
};

module.exports = PlaceReference;