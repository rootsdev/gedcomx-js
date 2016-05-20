var ExtensibleData = require('./ExtensibleData');

/**
 * A source citation.
 * 
 * @constructor
 * @apram {Object} [json]
 */
var SourceCitation = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof SourceCitation)){
    return new SourceCitation(json);
  }
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setLang(json.lang);
    this.setValue(json.value);
  }
};

SourceCitation.prototype = Object.create(ExtensibleData.prototype);

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
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.lang){
    json.lang = this.lang;
  }
  
  if(this.value){
    json.value = this.value;
  }
  
  return json;
};

module.exports = SourceCitation;