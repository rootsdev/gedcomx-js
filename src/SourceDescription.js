var ExtensibleData = require('./ExtensibleData'),
    SourceCitation = require('./SourceCitation'),
    ResourceReference = require('./ResourceReference'),
    SourceReference = require('./SourceReference'),
    TextValue = require('./TextValue'),
    Note = require('./Note'),
    Attribution = require('./Attribution'),
    Coverage = require('./Coverage'),
    Identifiers = require('./Identifiers'),
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
  
  ExtensibleData.call(this, json);
  
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

SourceDescription.prototype = Object.create(ExtensibleData.prototype);

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
  if(Array.isArray(citations)){
    var description = this;
    description.citations = [];
    citations.forEach(function(citation){
      description.addCitation(citation);
    });
  }
  return this;
};

/**
 * Add a citation
 * 
 * @param {SourceCitation|Object} citation
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addCitation = function(citation){
  if(citation){
    if(!Array.isArray(this.citations)){
      this.citations = [];
    }
    this.citations.push(SourceCitation(citation));
  }
  return this;
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
    this.mediator = ResourceReference(mediator);
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
  if(Array.isArray(sources)){
    var description = this;
    description.sources = [];
    sources.forEach(function(source){
      description.addSource(source);
    });
  }
  return this;
};

/**
 * Add a source
 * 
 * @param {SourceReference|Object}
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addSource = function(source){
  if(source){
    if(!Array.isArray(this.sources)){
      this.sources = [];
    }
    this.sources.push(SourceReference(source));
  }
  return this;
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
    this.analysis = ResourceReference(analysis);
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
    this.componentOf = SourceReference(componentOf);
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
  if(Array.isArray(titles)){
    var description = this;
    description.titles = [];
    titles.forEach(function(title){
      description.addTitle(title);
    });
  }
  return this;
};

/**
 * Add a title
 * 
 * @param {TextValue|Object}
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addTitle = function(title){
  if(title){
    if(!Array.isArray(this.titles)){
      this.titles = [];
    }
    this.titles.push(TextValue(title));
  }
  return this;
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
  if(Array.isArray(notes)){
    var description = this;
    description.notes = [];
    notes.forEach(function(note){
      description.addNote(note);
    });
  }
  return this;
};

/**
 * Add a source
 * 
 * @param {Note|Object} note
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addNote = function(note){
  if(note){
    if(!Array.isArray(this.notes)){
      this.notes = [];
    }
    this.notes.push(Note(note));
  }
  return this;
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
    this.attribution = Attribution(attribution);
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
  if(Array.isArray(rights)){
    var description = this;
    description.rights = [];
    rights.forEach(function(right){
      description.addRight(right);
    });
  }
  return this;
};

/**
 * Add a source
 * 
 * @param {ResourceReference|Object} right
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addRight = function(right){
  if(right){
    if(!Array.isArray(this.rights)){
      this.rights = [];
    }
    this.rights.push(ResourceReference(right));
  }
  return this;
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
    this.coverage = Coverage(coverage);
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
  if(Array.isArray(descriptions)){
    var sourceDescr = this;
    sourceDescr.descriptions = [];
    descriptions.forEach(function(description){
      sourceDescr.addDescription(description);
    });
  }
  return this;
};

/**
 * Add a description
 * 
 * @param {TextValue|Object}
 * @returns {SourceDescription}
 */
SourceDescription.prototype.addDescription = function(description){
  if(description){
    if(!Array.isArray(this.descriptions)){
      this.descriptions = [];
    }
    this.descriptions.push(TextValue(description));
  }
  return this;
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
    this.identifiers = Identifiers(identifiers);
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
    this.repository = ResourceReference(repository);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
SourceDescription.prototype.toJSON = function(){
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.resourceType){
    json.resourceType = this.resourceType;
  }
  
  if(this.citations){
    json.citations = this.citations.map(function(c){
      return c.toJSON();
    });
  }
  
  if(this.mediaType){
    json.mediaType = this.mediaType;
  }
  
  if(this.about){
    json.about = this.about;
  }
  
  if(this.mediator){
    json.mediator = this.mediator.toJSON();
  }
  
  if(this.sources){
    json.sources = this.sources.map(function(s){
      return s.toJSON();
    });
  }
  
  if(this.analysis){
    json.analysis = this.analysis.toJSON();
  }
  
  if(this.componentOf){
    json.componentOf = this.componentOf.toJSON();
  }
  
  if(this.titles){
    json.titles = this.titles.map(function(t){
      return t.toJSON();
    });
  }
  
  if(this.notes){
    json.notes = this.notes.map(function(n){
      return n.toJSON();
    });
  }
  
  if(this.attribution){
    json.attribution = this.attribution.toJSON();
  }
  
  if(this.rights){
    json.rights = this.rights.map(function(r){
      return r.toJSON();
    });
  }
  
  if(this.coverage){
    json.coverage = this.coverage.toJSON();
  }
  
  if(this.descriptions){
    json.descriptions = this.descriptions.map(function(d){
      return d.toJSON();
    });
  }
  
  if(this.identifiers){
    json.identifiers = this.identifiers.toJSON();
  }
  
  if(this.created){
    json.created = this.created;
  }
  
  if(this.modified){
    json.modified = this.modified;
  }
  
  if(this.repository){
    json.repository = this.repository.toJSON();
  }
  
  return json;
};

module.exports = SourceDescription;