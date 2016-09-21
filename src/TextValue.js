var utils = require('./utils'),
    Base = require('./Base');

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
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(TextValue.isInstance(json)){
    return json;
  }
  
  Base.call(this, json);
  
  if(json){
    this.setLang(json.lang);
    this.setValue(json.value);
  }
};

TextValue.prototype = Object.create(Base.prototype);

TextValue._gedxClass = TextValue.prototype._gedxClass = 'GedcomX.TextValue';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
TextValue.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
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
  return this._toJSON(Base, [
    'lang',
    'value'
  ]);
};

module.exports = TextValue;