/**
 * A text value in a specific language.
 * 
 * @constructor
 * @apram {Object} [json]
 */
var TextValue = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof TextValue)){
    return new TextValue(json);
  }
  
  if(json){
    this.setLang(json.lang);
    this.setValue(json.value);
  }
};

/**
 * Get the lang
 * 
 * @returns {String} lang
 */
TextValue.prototype.getLang = function(){
  return this.lang;
};

/**
 * Set the lang
 * 
 * @param {String} lang
 * @returns {TextValue} This instance
 */
TextValue.prototype.setLang = function(lang){
  this.lang = lang;
  return this;
};

/**
 * Get the value
 * 
 * @returns {String} value
 */
TextValue.prototype.getValue = function(){
  return this.value;
};

/**
 * Set the value
 * 
 * @param {String} value
 * @returns {TextValue} This instance
 */
TextValue.prototype.setValue = function(value){
  this.value = value;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
TextValue.prototype.toJSON = function(){
  var json = {};
  
  if(this.lang){
    json.lang = this.lang;
  }
  
  if(this.value){
    json.value = this.value;
  }
  
  return json;
};

module.exports = TextValue;