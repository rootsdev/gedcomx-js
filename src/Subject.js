var Conclusion = require('./Conclusion'),
    Identifiers = require('./Identifiers'),
    EvidenceReference = require('./EvidenceReference'),
    SourceReference = require('./SourceReference'),
    utils = require('./utils');

/**
 * An object identified in time and space by various conclusions.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Subject = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Subject)){
    return new Subject(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Subject.isInstance(json)){
    return json;
  }
  
  Conclusion.call(this, json);
  
  if(json){
    this.setExtracted(json.extracted);
    this.setEvidence(json.evidence);
    this.setIdentifiers(json.identifiers);
    this.setMedia(json.media);
  }
};

Subject.prototype = Object.create(Conclusion.prototype);

Subject._gedxClass = Subject.prototype._gedxClass = 'GedcomX.Subject';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Subject.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Is this an extracted conclusion?
 * 
 * @returns {Boolean} extracted
 */
Subject.prototype.isExtracted = function(){
  // Double exclamations force a boolean no matter what type the property
  // currently is. The main reason for this is to force undefiend into false.
  return !!this.isExtracted;
};

/**
 * Set the extracted property
 * 
 * @param {Boolean} extracted
 * @returns {Subject} This instance.
 */
Subject.prototype.setExtracted = function(extracted){
  // Double exclamations force a boolean
  this.extracted = !!extracted;
  return this;
};

/**
 * Get the evidence.
 * 
 * @returns {EvidenceReference[]}
 */
Subject.prototype.getEvidence = function(){
  return this.evidence || [];
};

/**
 * Set the evidence. This method will replace existing evidence entries with new entries.
 * 
 * @param {Object[]|EvidenceReference[]}
 * @returns {Subject} This instance.
 */
Subject.prototype.setEvidence = function(evidence){
  if(Array.isArray(evidence)){
    this.evidence = [];
    var subject = this;
    evidence.forEach(function(e){
      subject.addEvidence(e);
    });
  }
  return this;
};

/**
 * Add evidence
 * 
 * @param {Object|EvidenceReference}
 * @returns {Subject} This instance.
 */
Subject.prototype.addEvidence = function(evidence){
  if(evidence){
    if(!Array.isArray(this.evidence)){
      this.evidence = [];
    }
    this.evidence.push(EvidenceReference(evidence));
  }
  return this;
};

/**
 * Get the identifiers
 * 
 * @return {Identifiers}
 */
Subject.prototype.getIdentifiers = function(){
  return this.identifiers;
};

/**
 * Set the identifiers
 * 
 * @param {Object|Identifiers}
 * @returns {Subject} This instance
 */
Subject.prototype.setIdentifiers = function(identifiers){
  if(identifiers){
    this.identifiers = Identifiers(identifiers);
  }
  return this;
};

/**
 * Get the media references
 * 
 * @returns {SourceReference[]}
 */
Subject.prototype.getMedia = function(){
  return this.media || [];
};

/**
 * Set the media references
 * 
 * @param {Object[]|SourceReference[]}
 */
Subject.prototype.setMedia = function(media){
  if(Array.isArray(media)){
    this.media = [];
    var subject = this;
    media.forEach(function(e){
      subject.addMedia(e);
    });
  }
  return this;
};

/**
 * Add media
 * 
 * @param {Object|SourceReference}
 * @returns {Subject} This instance.
 */
Subject.prototype.addMedia = function(media){
  if(media){
    if(!Array.isArray(this.media)){
      this.media = [];
    }
    this.media.push(SourceReference(media));
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Subject.prototype.toJSON = function(){
  var json = Conclusion.prototype.toJSON.call(this);
  
  if(this.extracted){
    json.extracted = this.extracted;
  }
  
  if(this.evidence){
    json.evidence = this.evidence.map(function(e){
      return e.toJSON();
    });
  }
  
  if(this.identifiers){
    json.identifiers = this.identifiers.toJSON();
  }
  
  if(this.media){
    json.media = this.media.map(function(m){
      return m.toJSON();
    });
  }
  
  return json;
};

module.exports = Subject;