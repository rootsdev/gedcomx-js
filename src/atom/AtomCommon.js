var utils = require('../utils'),
    Base = require('../Base');

/**
 * Common attributes for all Atom entities
 * 
 * @constructor
 * @param {Object} [json]
 */
var AtomCommon = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof AtomCommon)){
    return new AtomCommon(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(AtomCommon.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

AtomCommon.prototype = Object.create(Base.prototype);

AtomCommon._gedxClass = AtomCommon.prototype._gedxClass = 'GedcomX.AtomCommon';

AtomCommon.jsonProps = [
  'base',
  'lang'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
AtomCommon.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {AtomCommon} this
 */
AtomCommon.prototype.init = function(json){
  
  Base.prototype.init.call(this, json);
  
  if(json){
    this.setBase(json.base);
    this.setLang(json.lang);
  }
  return this;
};

/**
 * Set the base attribute
 * 
 * @param {String} base
 * @return {AtomCommon} this
 */
AtomCommon.prototype.setBase = function(base){
  this.base = base;
  return this;
};

/**
 * Get the base
 * 
 * @return {String} base
 */
AtomCommon.prototype.getBase = function(base){
  return this.base;
};

/**
 * Set the lang
 * 
 * @param {String} lang
 * @return {AtomCommon} this
 */
AtomCommon.prototype.setLang = function(lang){
  this.lang = lang;
  return this;
};

/**
 * Get the lang
 * 
 * @return {String} lang
 */
AtomCommon.prototype.getLang = function(lang){
  return this.lang;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
AtomCommon.prototype.toJSON = function(){
  return this._toJSON(Base, AtomCommon.jsonProps);
};

module.exports = AtomCommon;
