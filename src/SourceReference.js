var ExtensibleData = require('./ExtensibleData'),
    Attribution = require('./Attribution'),
    utils = require('./utils');

/**
 * A reference to a discription of a source.
 * 
 * @constructor
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
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setDescription(json.description);
    this.setAttribution(json.attribution);
  }
};

SourceReference.prototype = Object.create(ExtensibleData.prototype);

SourceReference._gedxClass = SourceReference.prototype._gedxClass = 'GedcomX.SourceReference';

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
    this.attribution = new Attribution(attribution);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
SourceReference.prototype.toJSON = function(){
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.description){
    json.description = this.description;
  }
  
  if(this.attribution){
    json.attribution = this.attribution.toJSON();
  }
  
  return json;
};

module.exports = SourceReference;