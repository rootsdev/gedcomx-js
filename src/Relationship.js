var Subject = require('./Subject'),
    Fact = require('./Fact'),
    ResourceReference = require('./ResourceReference'),
    utils = require('./utils');
    
/**
 * A relationship.
 * 
 * @constructor
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
  
  Subject.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setPerson1(json.person1);
    this.setPerson2(json.person2);
    this.setFacts(json.facts);
  }
};

Relationship.prototype = Object.create(Subject.prototype);

Relationship._gedxClass = Relationship.prototype._gedxClass = 'GedcomX.Relationship';

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
    this.person1 = ResourceReference(person1);
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
    this.person2 = ResourceReference(person2);
  }
  return this;
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
  if(Array.isArray(facts)){
    this.facts = [];
    var person = this;
    facts.forEach(function(n){
      person.addFact(n);
    });
  }
};

/**
 * Add a fact
 * 
 * @param {Fact|Object} fact
 * @returns {Relationship} This instance
 */
Relationship.prototype.addFact = function(fact){
  if(fact){
    if(!Array.isArray(this.facts)){
      this.facts = [];
    }
    this.facts.push(Fact(fact));
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Relationship.prototype.toJSON = function(){
  var json = Subject.prototype.toJSON.call(this);
  
  if(this.type){
    json.type = this.type;
  }
  
  if(this.person1){
    json.person1 = this.person1.toJSON();
  }
  
  if(this.person2){
    json.person2 = this.person2.toJSON();
  }
  
  if(this.facts){
    json.facts = this.facts.map(function(f){
      return f.toJSON();
    });
  }
  
  return json;
};

module.exports = Relationship;