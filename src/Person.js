var Subject = require('./Subject'),
    Gender = require('./Gender'),
    Name = require('./Name'),
    Fact = require('./Fact'),
    utils = require('./utils');
    
/**
 * A person.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Person = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Person)){
    return new Person(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Person.isInstance(json)){
    return json;
  }
  
  Subject.call(this, json);
  
  if(json){
    this.setPrivate(json.private);
    this.setGender(json.gender);
    this.setNames(json.names);
    this.setFacts(json.facts);
  }
};

Person.prototype = Object.create(Subject.prototype);

Person._gedxClass = Person.prototype._gedxClass = 'GedcomX.Person';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Person.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Check whether the person is marked as private
 * 
 * @returns {Boolean} private
 */
Person.prototype.isPrivate = function(){
  return !!this.private;
};

/**
 * Set the private flag
 * 
 * @param {Boolean} isPrivate
 * @returns {Person} This instance
 */
Person.prototype.setPrivate = function(isPrivate){
  this.private = isPrivate;
  return this;
};

/**
 * Get the person's gender
 * 
 * @returns {Gender} gender
 */
Person.prototype.getGender = function(){
  return this.gender;
};

/**
 * Set the person's gender
 * 
 * @param {Gender} gender
 * @returns {Person} This instance
 */
Person.prototype.setGender = function(gender){
  if(gender){
    this.gender = Gender(gender);
  }
  return this;
};

/**
 * Get the names
 * 
 * @return {Name[]}
 */
Person.prototype.getNames = function(){
  return this.names || [];
};

/**
 * Set the names
 * 
 * @param {Name[]|Object[]} names
 * @returns {Person} This instance
 */
Person.prototype.setNames = function(names){
  if(Array.isArray(names)){
    this.names = [];
    var person = this;
    names.forEach(function(n){
      person.addName(n);
    });
  }
};

/**
 * Add a name
 * 
 * @param {NameForm|Object} name
 * @returns {Person} This instance
 */
Person.prototype.addName = function(name){
  if(name){
    if(!Array.isArray(this.names)){
      this.names = [];
    }
    this.names.push(Name(name));
  }
  return this;
};

/**
 * Get the facts
 * 
 * @return {Fact[]}
 */
Person.prototype.getFacts = function(){
  return this.facts || [];
};

/**
 * Set the facts
 * 
 * @param {Fact[]|Object[]} facts
 * @returns {Person} This instance
 */
Person.prototype.setFacts = function(facts){
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
 * @returns {Person} This instance
 */
Person.prototype.addFact = function(fact){
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
Person.prototype.toJSON = function(){
  var json = Subject.prototype.toJSON.call(this);
  
  if(typeof this.private === 'boolean'){
    json.private = this.private;
  }
  
  if(this.gender){
    json.gender = this.gender.toJSON();
  }
  
  if(this.names){
    json.names = this.names.map(function(n){
      return n.toJSON();
    });
  }
  
  if(this.facts){
    json.facts = this.facts.map(function(f){
      return f.toJSON();
    });
  }
  
  return json;
};

module.exports = Person;