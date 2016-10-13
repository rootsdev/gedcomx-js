var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A source citation.
 * 
 * @class
 * @extends ExtensibleData
 * @apram {Object} [json]
 */
var SourceCitation = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof SourceCitation)){
    return new SourceCitation(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(SourceCitation.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

SourceCitation.prototype = Object.create(GedcomX.ExtensibleData.prototype);

SourceCitation._gedxClass = SourceCitation.prototype._gedxClass = 'GedcomX.SourceCitation';

SourceCitation.jsonProps = [
  'lang',
  'value'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
SourceCitation.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {SourceCitation} this
 */
SourceCitation.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
  if(json){
    this.setLang(json.lang);
    this.setValue(json.value);
  }
  return this;
};

/**
 * Get the lang
 * 
 * @returns {String} lang
 */
SourceCitation.prototype.getLang = function(){
  return this.lang;
};

/**
 * Set the lang
 * 
 * @param {String} lang
 * @returns {SourceCitation} This instance
 */
SourceCitation.prototype.setLang = function(lang){
  this.lang = lang;
  return this;
};

/**
 * Get the value
 * 
 * @returns {String} value
 */
SourceCitation.prototype.getValue = function(){
  return this.value;
};

/**
 * Set the value
 * 
 * @param {String} value
 * @returns {SourceCitation} This instance
 */
SourceCitation.prototype.setValue = function(value){
  this.value = value;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
SourceCitation.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, SourceCitation.jsonProps);
};

module.exports = SourceCitation;