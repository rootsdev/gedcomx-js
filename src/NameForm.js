var ExtensibleData = require('./ExtensibleData'),
    NamePart = require('./NamePart'),
    utils = require('./utils');

/**
 * A form of a name.
 * 
 * @constructor
 * @param {Object} [json]
 */
var NameForm = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof NameForm)){
    return new NameForm(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(NameForm.isInstance(json)){
    return json;
  }
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setLang(json.lang);
    this.setFullText(json.fullText);
    this.setParts(json.parts);
  }
};

NameForm.prototype = Object.create(ExtensibleData.prototype);

NameForm._gedxClass = NameForm.prototype._gedxClass = 'GedcomX.NameForm';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
NameForm.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the lang tag
 * 
 * @returns {String} lang
 */
NameForm.prototype.getLang = function(){
  return this.lang;
};

/**
 * Set the lang tag
 * 
 * @param {String} lang
 * @returns {NameForm} This instance
 */
NameForm.prototype.setLang = function(lang){
  this.lang = lang;
  return this;
};

/**
 * Get the full text
 * 
 * @returns {String} fullText
 */
NameForm.prototype.getFullText = function(){
  return this.fullText;
};

/**
 * Set the full text
 * 
 * @param {String} fullText
 * @returns {NameForm} This instance
 */
NameForm.prototype.setFullText = function(fullText){
  this.fullText = fullText;
  return this;
};

/**
 * Get the name parts
 * 
 * @returns {NamePart[]}
 */
NameForm.prototype.getParts = function(){
  return this.parts || [];
};

/**
 * Set the name parts
 * 
 * @param {NamePart[]|Object[]} parts
 * @returns {NameForm} This instance
 */
NameForm.prototype.setParts = function(parts){
  if(Array.isArray(parts)){
    var nameForm = this;
    nameForm.parts = [];
    parts.forEach(function(part){
      nameForm.addPart(part);
    });
  }
  return this;
};

/**
 * Add a name part
 * 
 * @param {NamePart|Object}
 * @returns {NameForm}
 */
NameForm.prototype.addPart = function(part){
  if(part){
    if(!Array.isArray(this.parts)){
      this.parts = [];
    }
    this.parts.push(NamePart(part));
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
NameForm.prototype.toJSON = function(){
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.lang){
    json.lang = this.lang;
  }
  
  if(this.fullText){
    json.fullText = this.fullText;
  }
  
  if(this.parts){
    json.parts = this.parts.map(function(p){
      return p.toJSON();
    });
  }
  
  return json;
};

module.exports = NameForm;