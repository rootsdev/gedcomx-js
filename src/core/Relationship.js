var GedcomX = require('../'),
    utils = require('../utils');
    
/**
 * A relationship.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#relationship|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends Subject
 * @param {Object} [json]
 */
var Relationship = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Relationship)){
    return new Relationship(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Relationship.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Relationship.prototype = Object.create(GedcomX.Subject.prototype);

Relationship._gedxClass = Relationship.prototype._gedxClass = 'GedcomX.Relationship';

Relationship.jsonProps = [
  'type',
  'person1',
  'person2',
  'facts'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Relationship.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Relationship} this
 */
Relationship.prototype.init = function(json){
  
  GedcomX.Subject.prototype.init.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setPerson1(json.person1);
    this.setPerson2(json.person2);
    this.setFacts(json.facts);
  }
  return this;
};

/**
 * Get the relationship type
 * 
 * @returns {String} type
 */
Relationship.prototype.getType = function(){
  return this.type;
};

/**
 * Set the relationship type
 * 
 * @param {String} type
 * @returns {Relationship} This instance
 */
Relationship.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get person1 reference
 * 
 * @returns {ResourceReference}
 */
Relationship.prototype.getPerson1 = function(){
  return this.person1;
};

/**
 * Set the person1 reference
 * 
 * @param {ResourceReference} person1
 * @returns {Relationship} This instance
 */
Relationship.prototype.setPerson1 = function(person1){
  if(person1){
    this.person1 = GedcomX.ResourceReference(person1);
  }
  return this;
};

/**
 * Get person2 reference
 * 
 * @returns {ResourceReference}
 */
Relationship.prototype.getPerson2 = function(){
  return this.person2;
};

/**
 * Set the person1 reference
 * 
 * @param {ResourceReference} person2
 * @returns {Relationship} This instance
 */
Relationship.prototype.setPerson2 = function(person2){
  if(person2){
    this.person2 = GedcomX.ResourceReference(person2);
  }
  return this;
};

/**
 * Calculate whether a relationship involves a person
 * 
 * @param {Person|String} person Person object or person ID
 * @return {Boolean}
 */
Relationship.prototype.involvesPerson = function(person){
  if(this.person1 && this.person2){
    return this.person1.matches(person) || this.person2.matches(person);
  } else if(this.person1){
    return this.person1.matches(person);
  } else if(this.person2){
    return this.person2.matches(person);
  } else {
    return false;
  }
};

/**
 * Given a person in this relationships, return the other person's resource reference.
 * 
 * @param {Person|String} person Person object or person ID
 * @return {ResourceReference}
 */
Relationship.prototype.getOtherPerson = function(person){
  return this.person1 && this.person1.matches(person) ? this.person2 : this.person1;
};

/**
 * Get the facts
 * 
 * @return {Fact[]}
 */
Relationship.prototype.getFacts = function(){
  return this.facts || [];
};

/**
 * Set the facts
 * 
 * @param {Fact[]|Object[]} facts
 * @returns {Relationship} This instance
 */
Relationship.prototype.setFacts = function(facts){
  return this._setArray(facts, 'facts', 'addFact');
};

/**
 * Add a fact
 * 
 * @param {Fact|Object} fact
 * @returns {Relationship} This instance
 */
Relationship.prototype.addFact = function(fact){
  return this._arrayPush(fact, 'facts', GedcomX.Fact);
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Relationship.prototype.toJSON = function(){
  return this._toJSON(GedcomX.Subject, Relationship.jsonProps);
};

module.exports = Relationship;