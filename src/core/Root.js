var utils = require('../utils'),
    GedcomX = require('../');

/**
 * A GEDCOM X document.
 * 
 * @class
 * @extends ExtensibleData
 * @param {Object} [json]
 */
var Root = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Root)){
    return new Root(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Root.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Root.prototype = Object.create(GedcomX.ExtensibleData.prototype);

Root._gedxClass = Root.prototype._gedxClass = 'Root';

Root.jsonProps = [
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
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Root.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Root} this
 */
Root.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
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
  return this;
};

/**
 * Get the lang
 * 
 * @return {String}
 */
Root.prototype.getLang = function(){
  return this.lang;
};

/**
 * Set the lang
 * 
 * @param {String} lang
 * @return {Root} This instance
 */
Root.prototype.setLang = function(lang){
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
Root.prototype.getDescription = function(){
  return this.description;
};

/**
 * Set the description
 * 
 * @param {String} description URI that must resolve to a SourceDescription
 * @return {Root} This instance
 */
Root.prototype.setDescription = function(description){
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
Root.prototype.getPersons = function(){
  return this.persons || [];
};

/**
 * Set the persons
 * 
 * @param {Person[]|Object[]} persons
 * @returns {Root} This instance
 */
Root.prototype.setPersons = function(persons){
  return this._setArray(persons, 'persons', 'addPerson');
};

/**
 * Add a person
 * 
 * @param {Person|Object}
 * @returns {Root} This instance
 */
Root.prototype.addPerson = function(person){
  return this._arrayPush(person, 'persons', GedcomX.Person);
};

/**
 * Get the relationships
 * 
 * @returns {Relationship[]}
 */
Root.prototype.getRelationships = function(){
  return this.relationships || [];
};

/**
 * Set the relationships
 * 
 * @param {Relationship[]|Object[]} relationships
 * @returns {Root}
 */
Root.prototype.setRelationships = function(relationships){
  return this._setArray(relationships, 'relationships', 'addRelationship');
};

/**
 * Add a relationship
 * 
 * @param {Relationship|Object} relationship
 * @returns {Root}
 */
Root.prototype.addRelationship = function(relationship){
  return this._arrayPush(relationship, 'relationships', GedcomX.Relationship);
};

/**
 * Get the source descriptions
 * 
 * @returns {SourceDescription[]}
 */
Root.prototype.getSourceDescriptions = function(){
  return this.sourceDescriptions || [];
};

/**
 * Set the source descriptions
 * 
 * @param {SourceDescription[]|Object[]} sourceDescriptions
 * @returns {Root}
 */
Root.prototype.setSourceDescriptions = function(sourceDescriptions){
  return this._setArray(sourceDescriptions, 'sourceDescriptions', 'addSourceDescription');
};

/**
 * Add a ource description
 * 
 * @param {SourceDescription|Object} sourceDescription
 * @returns {Root}
 */
Root.prototype.addSourceDescription = function(sourceDescription){
  return this._arrayPush(sourceDescription, 'sourceDescriptions', GedcomX.SourceDescription);
};

/**
 * Get the agents
 * 
 * @returns {Agent[]}
 */
Root.prototype.getAgents = function(){
  return this.agents || [];
};

/**
 * Set the agents
 * 
 * @param {Agent[]|Object[]} agents
 * @returns {Root}
 */
Root.prototype.setAgents = function(agents){
  return this._setArray(agents, 'agents', 'addAgent');
};

/**
 * Add an agent
 * 
 * @param {Agent|Object}
 * @returns {Root}
 */
Root.prototype.addAgent = function(agent){
  return this._arrayPush(agent, 'agents', GedcomX.Agent);
};

/**
 * Get events
 * 
 * @returns {Event[]}
 */
Root.prototype.getEvents = function(){
  return this.events || [];
};

/**
 * Set events
 * 
 * @param {Event[]|Object[]} events
 * @returns {Root}
 */
Root.prototype.setEvents = function(events){
  return this._setArray(events, 'events', 'addEvent');
};

/**
 * Add an event
 * 
 * @param {Event|Object} event
 * @returns {Root}
 */
Root.prototype.addEvent = function(event){
  return this._arrayPush(event, 'events', GedcomX.Event);
};

/**
 * Get the documents
 * 
 * @returns {Document[]}
 */
Root.prototype.getDocuments = function(){
  return this.documents || [];
};

/**
 * Set the documents
 * 
 * @param {Documents[]|Object[]} documents
 * @returns {Root}
 */
Root.prototype.setDocuments = function(documents){
  return this._setArray(documents, 'documents', 'addDocument');
};

/**
 * Add a document
 * 
 * @param {Document|Object} doc
 * @returns {Root}
 */
Root.prototype.addDocument = function(doc){
  return this._arrayPush(doc, 'documents', GedcomX.Document);
};

/**
 * Get places
 * 
 * @returns {PlaceDescription[]}
 */
Root.prototype.getPlaces = function(){
  return this.places || [];
};

/**
 * Set the places
 * 
 * @param {PlaceDescription[]|Object} places
 * @returns {Root}
 */
Root.prototype.setPlaces = function(places){
  return this._setArray(places, 'places', 'addPlace');
};

/**
 * Add a place
 * 
 * @param {PlaceDescription} place
 * @returns {Root}
 */
Root.prototype.addPlace = function(place){
  return this._arrayPush(place, 'places', GedcomX.PlaceDescription);
};

/**
 * Get attritbution
 * 
 * @returns {Attribution}
 */
Root.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set attribution
 * 
 * @param {Attribution} attribution
 * @returns {Root}
 */
Root.prototype.setAttribution = function(attribution){
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
Root.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, Root.jsonProps);
};

module.exports = Root;