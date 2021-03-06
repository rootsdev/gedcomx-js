var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A form of a name.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#name-form|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends ExtensibleData
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
  
  this.init(json);
};

NameForm.prototype = Object.create(GedcomX.ExtensibleData.prototype);

NameForm._gedxClass = NameForm.prototype._gedxClass = 'GedcomX.NameForm';

NameForm.jsonProps = [
  'lang',
  'fullText',
  'parts'
];

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
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {NameForm} this
 */
NameForm.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
  if(json){
    this.setLang(json.lang);
    this.setFullText(json.fullText);
    this.setParts(json.parts);
  }
  
  return this;
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
 * @param {Boolean=} calculateIfMissing Calculate the full text if it's not set.
 * @returns {String} fullText
 */
NameForm.prototype.getFullText = function(calculateIfMissing){
  if(this.fullText){
    return this.fullText;
  } else if(calculateIfMissing) {
    var parts = [], nameForm = this;
    ['Prefix', 'Given', 'Surname', 'Suffix'].forEach(function(type){
      parts = parts.concat(nameForm.getParts('http://gedcomx.org/' + type).map(function(p){
        return p.value;
      }));
      /*
      var part = nameForm.getPart('http://gedcomx.org/' + type);
      if(part){
        parts.push(part.value);
      }
      */
    });
    return parts.join(' ');
  }
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
 * @param {String=} type
 * @returns {NamePart[]}
 */
NameForm.prototype.getParts = function(type){
  if(!this.parts){
    return [];
  }
  else if(type){
    var filtered = [];
    for(var i = 0; i < this.parts.length; i++){
      if(this.parts[i].getType() === type){
        filtered.push(this.parts[i]);
      }
    }
    return filtered;
  } 
  else {
    return this.parts;
  }
};

/**
 * Set the name parts
 * 
 * @param {NamePart[]|Object[]} parts
 * @returns {NameForm} This instance
 */
NameForm.prototype.setParts = function(parts){
  return this._setArray(parts, 'parts', 'addPart');
};

/**
 * Add a name part
 * 
 * @param {NamePart|Object}
 * @returns {NameForm}
 */
NameForm.prototype.addPart = function(part){
  return this._arrayPush(part, 'parts', GedcomX.NamePart);
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
NameForm.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, NameForm.jsonProps);
};

module.exports = NameForm;