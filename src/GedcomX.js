var Person = require('./Person');

/**
 * A GEDCOM X document.
 * 
 * @constructor
 * @param {Object} [json]
 */
var GedcomX = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof GedcomX)){
    return new GedcomX(json);
  }
  
  if(json){
    this.setPersons(json.persons);
    // this.setRelationships(json.relationships);
    // this.setSourceDescriptions(json.sourceDescriptions);
  }
  
};

/**
 * Get the persons
 * 
 * @returns {Person[]}
 */
GedcomX.prototype.getPersons = function(){
  return this.persons || [];
};

/**
 * Set the persons
 * 
 * @param {Person[]|Object[]} persons
 * @returns {GedcomX} This instance
 */
GedcomX.prototype.setPersons = function(persons){
  if(Array.isArray(persons)){
    var gedx = this;
    gedx.persons = [];
    persons.forEach(function(p){
      gedx.addPerson(p);
    });
  }
  return this;
};

/**
 * Add a person
 * 
 * @param {Person|Object}
 * @returns {GedcomX} This instance
 */
GedcomX.prototype.addPerson = function(person){
  if(person){
    if(!Array.isArray(this.persons)){
      this.persons = [];
    }
    this.persons.push(Person(person));
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
GedcomX.prototype.toJSON = function(){
  var json = {};
  
  if(this.persons){
    json.persons = this.persons.map(function(p){
      return p.toJSON();
    });
  }
  
  return json;
};

// Expose all classes
GedcomX.Attribution = require('./Attribution');
GedcomX.Conclusion = require('./Conclusion');
GedcomX.Date = require('./Date');
GedcomX.EvidenceReference = require('./EvidenceReference');
GedcomX.ExtensibleData = require('./ExtensibleData');
GedcomX.Fact = require('./Fact');
GedcomX.Gender = require('./Gender');
GedcomX.Identifiers = require('./Identifiers');
GedcomX.Name = require('./Name');
GedcomX.NameForm = require('./NameForm');
GedcomX.NamePart = require('./NamePart');
GedcomX.Note = require('./Note');
GedcomX.Person = Person;
GedcomX.PlaceReference = require('./PlaceReference');
GedcomX.Qualifier = require('./Qualifier');
GedcomX.Relationship = require('./Relationship');
GedcomX.ResourceReference = require('./ResourceReference');
GedcomX.SourceCitation = require('./SourceCitation');
GedcomX.SourceReference = require('./SourceReference');
GedcomX.Subject = require('./Subject');

module.exports = GedcomX;