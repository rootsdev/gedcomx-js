var utils = require('./utils'),
    ExtensibleData = require('./ExtensibleData');

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
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(GedcomX.isInstance(json)){
    return json;
  }
  
  GedcomX.ExtensibleData.call(this, json);
  
  if(json){
    this.setLang(json.lang);
    this.setPersons(json.persons);
    this.setRelationships(json.relationships);
    this.setSourceDescriptions(json.sourceDescriptions);
    this.setAgents(json.agents);
    this.setEvents(json.events);
    this.setDocuments(json.documents);
    this.setPlaces(json.places);
    this.setAttribution(json.attribution);
    this.setDescription(json.description);
  }
};

GedcomX.prototype = Object.create(ExtensibleData.prototype);

GedcomX._gedxClass = GedcomX.prototype._gedxClass = 'GedcomX';

// Export early so that cyclical dependencies work properly
module.exports = GedcomX;

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
GedcomX.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the lang
 * 
 * @return {String}
 */
GedcomX.prototype.getLang = function(){
  return this.lang;
};

/**
 * Set the lang
 * 
 * @param {String} lang
 * @return {GedcomX} This instance
 */
GedcomX.prototype.setLang = function(lang){
  if(lang){
    this.lang = lang;
  }
  return this;
};

/**
 * Get the description
 * 
 * @return {String}
 */
GedcomX.prototype.getDescription = function(){
  return this.description;
};

/**
 * Set the description
 * 
 * @param {String} description URI that must resolve to a SourceDescription
 * @return {GedcomX} This instance
 */
GedcomX.prototype.setDescription = function(description){
  if(description){
    this.description = description;
  }
  return this;
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
  return this._setArray(persons, 'persons', 'addPerson');
};

/**
 * Add a person
 * 
 * @param {Person|Object}
 * @returns {GedcomX} This instance
 */
GedcomX.prototype.addPerson = function(person){
  return this._arrayPush(person, 'persons', GedcomX.Person);
};

/**
 * Get the relationships
 * 
 * @returns {Relationship[]}
 */
GedcomX.prototype.getRelationships = function(){
  return this.relationships || [];
};

/**
 * Set the relationships
 * 
 * @param {Relationship[]|Object[]} relationships
 * @returns {GedcomX}
 */
GedcomX.prototype.setRelationships = function(relationships){
  return this._setArray(relationships, 'relationships', 'addRelationship');
};

/**
 * Add a relationship
 * 
 * @param {Relationship|Object} relationship
 * @returns {GedcomX}
 */
GedcomX.prototype.addRelationship = function(relationship){
  return this._arrayPush(relationship, 'relationships', GedcomX.Relationship);
};

/**
 * Get the source descriptions
 * 
 * @returns {SourceDescription[]}
 */
GedcomX.prototype.getSourceDescriptions = function(){
  return this.sourceDescriptions || [];
};

/**
 * Set the source descriptions
 * 
 * @param {SourceDescription[]|Object[]} sourceDescriptions
 * @returns {GedcomX}
 */
GedcomX.prototype.setSourceDescriptions = function(sourceDescriptions){
  return this._setArray(sourceDescriptions, 'sourceDescriptions', 'addSourceDescription');
};

/**
 * Add a ource description
 * 
 * @param {SourceDescription|Object} sourceDescription
 * @returns {GedcomX}
 */
GedcomX.prototype.addSourceDescription = function(sourceDescription){
  return this._arrayPush(sourceDescription, 'sourceDescriptions', GedcomX.SourceDescription);
};

/**
 * Get the agents
 * 
 * @returns {Agent[]}
 */
GedcomX.prototype.getAgents = function(){
  return this.agents || [];
};

/**
 * Set the agents
 * 
 * @param {Agent[]|Object[]} agents
 * @returns {GedcomX}
 */
GedcomX.prototype.setAgents = function(agents){
  return this._setArray(agents, 'agents', 'addAgent');
};

/**
 * Add an agent
 * 
 * @param {Agent|Object}
 * @returns {GedcomX}
 */
GedcomX.prototype.addAgent = function(agent){
  return this._arrayPush(agent, 'agents', GedcomX.Agent);
};

/**
 * Get events
 * 
 * @returns {Event[]}
 */
GedcomX.prototype.getEvents = function(){
  return this.events || [];
};

/**
 * Set events
 * 
 * @param {Event[]|Object[]} events
 * @returns {GedcomX}
 */
GedcomX.prototype.setEvents = function(events){
  return this._setArray(events, 'events', 'addEvent');
};

/**
 * Add an event
 * 
 * @param {Event|Object} event
 * @returns {GedcomX}
 */
GedcomX.prototype.addEvent = function(event){
  return this._arrayPush(event, 'events', GedcomX.Event);
};

/**
 * Get the documents
 * 
 * @returns {Document[]}
 */
GedcomX.prototype.getDocuments = function(){
  return this.documents || [];
};

/**
 * Set the documents
 * 
 * @param {Documents[]|Object[]} documents
 * @returns {GedcomX}
 */
GedcomX.prototype.setDocuments = function(documents){
  return this._setArray(documents, 'documents', 'addDocument');
};

/**
 * Add a document
 * 
 * @param {Document|Object} doc
 * @returns {GedcomX}
 */
GedcomX.prototype.addDocument = function(doc){
  return this._arrayPush(doc, 'documents', GedcomX.Document);
};

/**
 * Get places
 * 
 * @returns {PlaceDescription[]}
 */
GedcomX.prototype.getPlaces = function(){
  return this.places || [];
};

/**
 * Set the places
 * 
 * @param {PlaceDescription[]|Object} places
 * @returns {GedcomX}
 */
GedcomX.prototype.setPlaces = function(places){
  return this._setArray(places, 'places', 'addPlace');
};

/**
 * Add a place
 * 
 * @param {PlaceDescription} place
 * @returns {GedcomX}
 */
GedcomX.prototype.addPlace = function(place){
  return this._arrayPush(place, 'places', GedcomX.PlaceDescription);
};

/**
 * Get attritbution
 * 
 * @returns {Attribution}
 */
GedcomX.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set attribution
 * 
 * @param {Attribution} attribution
 * @returns {GedcomX}
 */
GedcomX.prototype.setAttribution = function(attribution){
  if(attribution){
    this.attribution = GedcomX.Attribution(attribution);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
GedcomX.prototype.toJSON = function(){
  return this._toJSON(ExtensibleData, [
    'lang',
    'description',
    'persons',
    'relationships',
    'sourceDescriptions',
    'agents',
    'events',
    'documents',
    'places',
    'attribution'
  ]);
};

// Expose all classes. ExtensibleData has to be first because many classes
// extend it. Since dependencies are cyclical, they will require GedcomX
// immediately so they can get ExtensibleData when setting up their prototype.
// We also have to make sure any other inheritance heirarchy is assembled in order.
GedcomX.ExtensibleData = ExtensibleData;
GedcomX.Conclusion = require('./Conclusion');
GedcomX.Subject = require('./Subject');
GedcomX.ResourceReference = require('./ResourceReference');

// The rest are listed alphabetically because they either extend Base or extend
// one of the classes included above.
GedcomX.Address = require('./Address');
GedcomX.Agent = require('./Agent');
GedcomX.Attribution = require('./Attribution');
GedcomX.Coverage = require('./Coverage');
GedcomX.Date = require('./Date');
GedcomX.Document = require('./Document');
GedcomX.Event = require('./Event');
GedcomX.EventRole = require('./EventRole');
GedcomX.EvidenceReference = require('./EvidenceReference');
GedcomX.Fact = require('./Fact');
GedcomX.Gender = require('./Gender');
GedcomX.Identifiers = require('./Identifiers');
GedcomX.Name = require('./Name');
GedcomX.NameForm = require('./NameForm');
GedcomX.NamePart = require('./NamePart');
GedcomX.Note = require('./Note');
GedcomX.OnlineAccount = require('./OnlineAccount');
GedcomX.Person = require('./Person');
GedcomX.PlaceDescription = require('./PlaceDescription');
GedcomX.PlaceReference = require('./PlaceReference');
GedcomX.Qualifier = require('./Qualifier');
GedcomX.Relationship = require('./Relationship');
GedcomX.SourceCitation = require('./SourceCitation');
GedcomX.SourceDescription = require('./SourceDescription');
GedcomX.SourceReference = require('./SourceReference');
GedcomX.TextValue = require('./TextValue');