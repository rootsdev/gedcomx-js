var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A textual document
 * 
 * @constructor
 * @param {Object} [json]
 */
var Document = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Document)){
    return new Document(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Document.isInstance(json)){
    return json;
  }
  
  GedcomX.Conclusion.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setExtracted(json.extracted);
    this.setTextType(json.textType);
    this.setText(json.text);
    this.setAttribution(json.attribution);
  }
};

Document.prototype = Object.create(GedcomX.Conclusion.prototype);

Document._gedxClass = Document.prototype._gedxClass = 'GedcomX.Document';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Document.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the type
 * 
 * @returns {String}
 */
Document.prototype.getType = function(){
  return this.type;
};

/**
 * Set the type
 * 
 * @param {String} type
 * @returns {Document}
 */
Document.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the extracted flag
 * 
 * @returns {Boolean} extracted
 */
Document.prototype.getExtracted = function(){
  
  // Spec says it defaults to false so we force undefined to become false
  return !!this.extracted;
};

/**
 * Set the extracted flag
 * 
 * @param {Boolean} extracted
 * @returns {Document}
 */
Document.prototype.setExtracted = function(extracted){
  this.extracted = !!extracted;
  return this;
};

/**
 * Get the text type
 * 
 * @returns {String}
 */
Document.prototype.getTextType = function(){
  return this.textType;
};

/**
 * Set the text type
 * 
 * @param {String} textType
 * @returns {Document}
 */
Document.prototype.setTextType = function(textType){
  this.textType = textType;
  return this;
};

/**
 * Get the text
 * 
 * @returns {String}
 */
Document.prototype.getText = function(){
  return this.text;
};

/**
 * Set the text
 * 
 * @param {String} text
 * @returns {Document}
 */
Document.prototype.setText = function(text){
  this.text = text;
  return this;
};

/**
 * Get the attribution
 * 
 * @returns {Attribution}
 */
Document.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set the attribution
 * 
 * @param {Attribution} attribution
 * @returns {Document}
 */
Document.prototype.setAttribution = function(attribution){
  if(attribution){
    this.attribution = GedcomX.Attribution(attribution);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Document.prototype.toJSON = function(){
  return this._toJSON(GedcomX.Conclusion, [
    'type',
    'extracted',
    'textType',
    'text',
    'attribution'
  ]);
};

module.exports = Document;