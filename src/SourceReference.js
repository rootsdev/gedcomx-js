var ExtensibleData = require('./ExtensibleData'),
    Attribution = require('./Attribution');

/**
 * A reference to a discription of a source.
 * 
 * @constructor
 * @param {Object} json
 */
var SourceReference = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof SourceReference)){
    return new SourceReference(json);
  }
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setDescription(json.description);
    this.setAttribution(json.attribution);
  }
};

SourceReference.prototype = Object.create(ExtensibleData.prototype);

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