var GedcomX = require('../'),
    utils = require('../utils');

/**
 * A fact for a person or relationship.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#fact-conclusion|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends Conclusion
 * @param {Object} [json]
 */
var Fact = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Fact)){
    return new Fact(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Fact.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Fact.prototype = Object.create(GedcomX.Conclusion.prototype);

Fact._gedxClass = Fact.prototype._gedxClass = 'GedcomX.Fact';

Fact.jsonProps = [
  'type',
  'date',
  'place',
  'value',
  'qualifiers'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Fact.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Fact} this
 */
Fact.prototype.init = function(json){
  
  GedcomX.Conclusion.prototype.init.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setDate(json.date);
    this.setPlace(json.place);
    this.setValue(json.value);
    this.setQualifiers(json.qualifiers);
  }
  return this;
};

/**
 * Get the fact type
 * 
 * @returns {String} type
 */
Fact.prototype.getType = function(){
  return this.type;
};

/**
 * Set the fact type
 * 
 * @param {String} type
 * @returns {Fact} This instance
 */
Fact.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the date
 * 
 * @returns {Date} date
 */
Fact.prototype.getDate = function(){
  return this.date;
};

/**
 * Set the date
 * 
 * @param {Date|Object} date
 * @returns {Fact} This instance
 */
Fact.prototype.setDate = function(date){
  if(date){
    this.date = GedcomX.Date(date);
  }
  return this;
};

/**
 * Get the place reference
 * 
 * @returns {PlaceReference}
 */
Fact.prototype.getPlace = function(){
  return this.place;
};

/**
 * Set the place reference
 *
 * @param {PlaceReference|Object} place
 * @returns {Fact} This instance
 */
Fact.prototype.setPlace = function(place){
  if(place){
    this.place = GedcomX.PlaceReference(place);
  }
  return this;
};

/**
 * Get the value
 * 
 * @returns {String}
 */
Fact.prototype.getValue = function(){
  return this.value;
};

/**
 * Set the value
 * 
 * @param {String} value
 * @returns {Fact} This instance
 */
Fact.prototype.setValue = function(value){
  this.value = value;
  return this;
};

/**
 * Get qualifiers
 * 
 * @return {Qualifer[]}
 */
Fact.prototype.getQualifiers = function(){
  return this.qualifiers || [];
};

/**
 * Set the qualifiers
 * 
 * @param {Qualifer[]|Object[]} qualifiers
 * @returns {Fact} This instance
 */
Fact.prototype.setQualifiers = function(qualifiers){
  return this._setArray(qualifiers, 'qualifiers', 'addQualifier');
};

/**
 * Add a qualifier
 * 
 * @param {Qualifier|Object} qualifier
 * @returns {Fact} This instance
 */
Fact.prototype.addQualifier = function(qualifier){
  return this._arrayPush(qualifier, 'qualifiers', GedcomX.Qualifier);
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Fact.prototype.toJSON = function(){
  return this._toJSON(GedcomX.Conclusion, Fact.jsonProps);
};

module.exports = Fact;