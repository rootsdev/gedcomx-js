var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A name.
 * 
 * @class
 * @extends Conclusion
 * @param {Object} [json]
 */
var Name = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Name)){
    return new Name(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Name.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Name.prototype = Object.create(GedcomX.Conclusion.prototype);

Name._gedxClass = Name.prototype._gedxClass = 'GedcomX.Name';

Name.jsonProps = [
  'type',
  'date',
  'nameForms'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Name.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Name} this
 */
Name.prototype.init = function(json){
  
  GedcomX.Conclusion.prototype.init.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setDate(json.date);
    this.setNameForms(json.nameForms);
  }
  return this;
};

/**
 * Get the name type
 * 
 * @returns {String} type
 */
Name.prototype.getType = function(){
  return this.type;
};

/**
 * Set the name type
 * 
 * @param {String} type
 * @returns {Name} This instance
 */
Name.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the date
 * 
 * @returns {Date} date
 */
Name.prototype.getDate = function(){
  return this.date;
};

/**
 * Set the date
 * 
 * @param {Date|Object} date
 * @returns {Fact} This instance
 */
Name.prototype.setDate = function(date){
  if(date){
    this.date = GedcomX.Date(date);
  }
  return this;
};

/**
 * Get the name forms
 * 
 * @return {NameForm[]}
 */
Name.prototype.getNameForms = function(){
  return this.nameForms || [];
};

/**
 * Set the name forms
 * 
 * @param {NameForm[]|Object[]} nameForms
 * @returns {Name} This instance
 */
Name.prototype.setNameForms = function(nameForms){
  return this._setArray(nameForms, 'nameForms', 'addNameForm');
};

/**
 * Add a name form
 * 
 * @param {NameForm|Object} nameForm
 * @returns {Name} This instance
 */
Name.prototype.addNameForm = function(nameForm){
  return this._arrayPush(nameForm, 'nameForms', GedcomX.NameForm);
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Name.prototype.toJSON = function(){
  return this._toJSON(GedcomX.Conclusion, Name.jsonProps);
};

module.exports = Name;