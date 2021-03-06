var GedcomX = require('../'),
    utils = require('../utils');

/**
 * An object identified in time and space by various conclusions.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#subject|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends Conclusion
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
  
  this.init(json);
};

Subject.prototype = Object.create(GedcomX.Conclusion.prototype);

Subject._gedxClass = Subject.prototype._gedxClass = 'GedcomX.Subject';

Subject.jsonProps = [
  'extracted',
  'evidence',
  'identifiers',
  'media'
];

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
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Subject} this
 */
Subject.prototype.init = function(json){
  
  GedcomX.Conclusion.prototype.init.call(this, json);
  
  if(json){
    // setExtracted defaults to false but when the property is undefined we
    // want it to stay that way
    if(typeof json.extracted !== 'undefined'){
      this.setExtracted(json.extracted);
    }
    this.setEvidence(json.evidence);
    this.setIdentifiers(json.identifiers);
    this.setMedia(json.media);
  }
  return this;
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
  return this._setArray(evidence, 'evidence', 'addEvidence');
};

/**
 * Add evidence
 * 
 * @param {Object|EvidenceReference}
 * @returns {Subject} This instance.
 */
Subject.prototype.addEvidence = function(evidence){
  return this._arrayPush(evidence, 'evidence', GedcomX.EvidenceReference);
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
    this.identifiers = GedcomX.Identifiers(identifiers);
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
  return this._setArray(media, 'media', 'addMedia');
};

/**
 * Add media
 * 
 * @param {Object|SourceReference}
 * @returns {Subject} This instance.
 */
Subject.prototype.addMedia = function(media){
  return this._arrayPush(media, 'media', GedcomX.SourceReference);
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Subject.prototype.toJSON = function(){
  return this._toJSON(GedcomX.Conclusion, Subject.jsonProps);
};

module.exports = Subject;