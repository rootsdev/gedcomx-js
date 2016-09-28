var GedcomX = require('./GedcomX'),
    utils = require('./utils');

/**
 * A description of a source.
 * 
 * @constructor
 * @apram {Object} [json]
 */
var SourceDescription = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof SourceDescription)){
    return new SourceDescription(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(SourceDescription.isInstance(json)){
    return json;
  }
  
  GedcomX.ExtensibleData.call(this, json);
  
  if(json){
    this.setResourceType(json.resourceType);
    this.setCitations(json.citations);
    this.setMediaType(json.mediaType);
    this.setAbout(json.about);
    this.setMediator(json.mediator);
    this.setSources(json.sources);
    this.setAnalysis(json.analysis);
    this.setComponentOf(json.componentOf);
    this.setTitles(json.titles);
    this.setNotes(json.notes);
    this.setAttribution(json.attribution);
    this.setRights(json.rights);
    this.setCoverage(json.coverage);
    this.setDescriptions(json.descriptions);
    this.setIdentifiers(json.identifiers);
    this.setCreated(json.created);
    this.setModified(json.modified);
    this.setRepository(json.repository);
  }
};

SourceDescription.prototype = Object.create(GedcomX.ExtensibleData.prototype);

SourceDescription._gedxClass = SourceDescription.prototype._gedxClass = 'GedcomX.SourceDescription';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
SourceDescription.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the resource type
 * 
 * @returns {String}
 */
SourceDescription.prototype.getResourceType = function(){
  return this.resourceType;
};

/**
 * Set the resource type
 * 
 * @param {String} resourceType
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setResourceType = function(resourceType){
  this.resourceType = resourceType;
  return this;
};

/**
 * Get the citations
 * 
 * @returns {SourceCitation[]}
 */
SourceDescription.prototype.getCitations = function(){
  return this.citations || [];
};

/**
 * Set the citations
 * 
 * @param {SourceCitation[]|Object[]} citations
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setCitations = function(citations){
  return this._setArray(citations, 'citations', 'addCitation');
};

/**
 * Add a citation
 * 
 * @param {SourceCitation|Object} citation
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addCitation = function(citation){
  return this._arrayPush(citation, 'citations', GedcomX.SourceCitation);
};

/**
 * Get the media type
 * 
 * @return {String}
 */
SourceDescription.prototype.getMediaType = function(){
  return this.mediaType;
};

/**
 * Set the media type
 * 
 * @param {String} mediaType
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setMediaType = function(mediaType){
  this.mediaType = mediaType;
  return this;
};

/**
 * Get the about property
 * 
 * @returns {String}
 */
SourceDescription.prototype.getAbout = function(){
  return this.about;
};

/**
 * Set the about property
 * 
 * @param {String} about
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setAbout = function(about){
  this.about = about;
  return this;
};

/**
 * Get the mediator
 * 
 * @returns {ResourceReference}
 */
SourceDescription.prototype.getMediator = function(){
  return this.mediator;
};

/**
 * Set the mediator
 * 
 * @param {ResourceReference} mediator
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setMediator = function(mediator){
  if(mediator){
    this.mediator = GedcomX.ResourceReference(mediator);
  }
  return this;
};

/**
 * Get sources
 * 
 * @returns {SourceReference[]}
 */
SourceDescription.prototype.getSources = function(){
  return this.sources || [];
};

/**
 * Set the sources
 * 
 * @param {SourceReference[]|Object[]} sources
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setSources = function(sources){
  return this._setArray(sources, 'sources', 'addSource');
};

/**
 * Add a source
 * 
 * @param {SourceReference|Object}
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addSource = function(source){
  return this._arrayPush(source, 'sources', GedcomX.SourceReference);
};

/**
 * Get the analysis
 * 
 * @return {ResourceReference}
 */
SourceDescription.prototype.getAnalysis = function(){
  return this.analysis;
};

/**
 * Set the analysis
 * 
 * @param {ResourceReference|Object} analysis
 * @return {SourceDescription}
 */
SourceDescription.prototype.setAnalysis = function(analysis){
  if(analysis){
    this.analysis = GedcomX.ResourceReference(analysis);
  }
  return this;
};

/**
 * Get the componentOf property
 * 
 * @return {SourceReference}
 */
SourceDescription.prototype.getComponentOf = function(){
  return this.componentOf;
};

/**
 * Set the componentOf property
 * 
 * @param {SourceReference} componentOf
 */
SourceDescription.prototype.setComponentOf = function(componentOf){
  if(componentOf){
    this.componentOf = GedcomX.SourceReference(componentOf);
  }
  return this;
};

/**
 * Get titles
 * 
 * @returns {TextValue[]}
 */
SourceDescription.prototype.getTitles = function(){
  return this.titles || [];
};

/**
 * Set the titles
 * 
 * @param {TextValue[]|Object[]} titles
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setTitles = function(titles){
  return this._setArray(titles, 'titles', 'addTitle');
};

/**
 * Add a title
 * 
 * @param {TextValue|Object}
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addTitle = function(title){
  return this._arrayPush(title, 'titles', GedcomX.TextValue);
};

/**
 * Get notes
 * 
 * @returns {Note[]}
 */
SourceDescription.prototype.getNotes = function(){
  return this.notes || [];
};

/**
 * Set the notes
 * 
 * @param {Note[]|Object[]} notes
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setNotes = function(notes){
  return this._setArray(notes, 'notes', 'addNote');
};

/**
 * Add a source
 * 
 * @param {Note|Object} note
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addNote = function(note){
  return this._arrayPush(note, 'notes', GedcomX.Note);
};

/**
 * Get the attribution
 * 
 * @returns {Attribution}
 */
SourceDescription.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set the attribution
 * 
 * @param {Attribution|Object} attribution
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setAttribution = function(attribution){
  if(attribution){
    this.attribution = GedcomX.Attribution(attribution);
  }
  return this;
};

/**
 * Get the rights
 * 
 * @returns {ResourceReference[]}
 */
SourceDescription.prototype.getRights = function(){
  return this.rights || [];
};

/**
 * Set the rights
 * 
 * @param {ResourceReference[]|Object[]} rights
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setRights = function(rights){
  return this._setArray(rights, 'rights', 'addRight');
};

/**
 * Add a source
 * 
 * @param {ResourceReference|Object} right
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addRight = function(right){
  return this._arrayPush(right, 'rights', GedcomX.ResourceReference);
};

/**
 * Get the coverage
 * 
 * @returns {Coverage}
 */
SourceDescription.prototype.getCoverage = function(){
  return this.coverage;
};

/**
 * Set the coverage
 * 
 * @param {Coverage|Object} coverage
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setCoverage = function(coverage){
  if(coverage){
    this.coverage = GedcomX.Coverage(coverage);
  }
  return this;
};

/**
 * Get the descriptions
 * 
 * @returns {TextValue[]}
 */
SourceDescription.prototype.getDescriptions = function(){
  return this.descriptions || [];
};

/**
 * Set the descriptions
 * 
 * @param {TextValue[]|Object[]} descriptions
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setDescriptions = function(descriptions){
  return this._setArray(descriptions, 'descriptions', 'addDescription');
};

/**
 * Add a description
 * 
 * @param {TextValue|Object}
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addDescription = function(description){
  return this._arrayPush(description, 'descriptions', GedcomX.TextValue);
};

/**
 * Get the identifiers
 * 
 * @returns {Identifiers}
 */
SourceDescription.prototype.getIdentifiers = function(){
  return this.identifiers;
};

/**
 * Set the identifiers
 * 
 * @param {Identifiers} identifiers
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setIdentifiers = function(identifiers){
  if(identifiers){
    this.identifiers = GedcomX.Identifiers(identifiers);
  }
  return this;
};

/**
 * Get the created timestamp
 * 
 * @returns {Integer}
 */
SourceDescription.prototype.getCreated = function(){
  return this.created;
};

/**
 * Set the created timestamp
 * 
 * @param {Integer} created
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setCreated = function(created){
  this.created = created;
  return this;
};

/**
 * Get the modified timestamp
 * 
 * @returns {Integer}
 */
SourceDescription.prototype.getModified = function(){
  return this.modified;
};

/**
 * Set the modified timestamp
 * 
 * @param {Integer} modified
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setModified = function(modified){
  this.modified = modified;
  return this;
};

/**
 * Get the repository
 * 
 * @returns {ResourceReference}
 */
SourceDescription.prototype.getRepository = function(){
  return this.repository;
};

/**
 * Set the repository
 * 
 * @param {ResourceReference} repository
 * @returns {SourceDescription}
 */
SourceDescription.prototype.setRepository = function(repository){
  if(repository){
    this.repository = GedcomX.ResourceReference(repository);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
SourceDescription.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, [
    'resourceType',
    'citations',
    'mediaType',
    'about',
    'mediator',
    'sources',
    'analysis',
    'componentOf',
    'titles',
    'notes',
    'attribution',
    'rights',
    'coverage',
    'descriptions',
    'identifiers',
    'created',
    'modified',
    'repository'
  ]);
};

module.exports = SourceDescription;