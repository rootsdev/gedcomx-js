var GedcomX = require('../'),
    utils = require('../utils');

/**
 * Define who is contributing information, when they contributed it, 
 * and why they are making the contribution.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#attribution|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends ExtensibleData
 * @param {Object} [json]
 */
var Attribution = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Attribution)){
    return new Attribution(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Attribution.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Attribution.prototype = Object.create(GedcomX.ExtensibleData.prototype);

Attribution._gedxClass = Attribution.prototype._gedxClass = 'GedcomX.Attribution';

Attribution.jsonProps = [
  'changeMessage',
  'contributor',
  'created',
  'creator',
  'modified'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Attribution.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Attribution} this
 */
Attribution.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
  if(json){
    this.setChangeMessage(json.changeMessage);
    this.setContributor(json.contributor);
    this.setCreated(json.created);
    this.setCreator(json.creator);
    this.setModified(json.modified);
  }
  return this;
};

/**
 * Get the change message.
 * 
 * @returns {String} Change message
 */
Attribution.prototype.getChangeMessage = function(){
  return this.changeMessage;
};

/**
 * Set the change message.
 * 
 * @param {String} changeMessage
 * @returns {Attribution} This object
 */
Attribution.prototype.setChangeMessage = function(changeMessage){
  this.changeMessage = changeMessage;
  return this;
};

/**
 * Get the contributor.
 * 
 * @returns {ResourceReference} contributor
 */
Attribution.prototype.getContributor = function(){
  return this.contributor;
};

/**
 * Set the contributor
 * 
 * @param {Object|ResourceReference} contributor ResourceReference representing the contributor.
 * @returns {Attribution} This instance
 */
Attribution.prototype.setContributor = function(contributor){
  if(contributor){
    this.contributor = GedcomX.ResourceReference(contributor);
  }
  return this;
};

/**
 * Get the created timestamp
 * 
 * @returns {Date} created
 */
Attribution.prototype.getCreated = function(){
  return this.created;
};

/**
 * Set the created timestamp
 * 
 * @param {Date|Number} date Integer timestamp (milliseconds since epoch) or JavaScript Date instance
 * @returns {Attribution} This instance
 */
Attribution.prototype.setCreated = function(date){
  if(date){
    this.created = new Date(date);
  }
  return this;
};

/**
 * Get the creator
 * 
 * @returns {ResourceReference} Creator
 */
Attribution.prototype.getCreator = function(){
  return this.creator;
};

/**
 * Set the creator
 * 
 * @param {Object|ResourceReference} creator ResourceReference representing the creator.
 * @returns {Attribution} This instance
 */
Attribution.prototype.setCreator = function(creator){
  if(creator){
    this.creator = new GedcomX.ResourceReference(creator);
  }
  return this;
};

/**
 * Get the modified timestamp
 * 
 * @returns {Date} modified
 */
Attribution.prototype.getModified = function(){
  return this.modified;
};

/**
 * Set the modified timestamp
 * 
 * @param {Date|Number} date Integer timestamp (milliseconds since epoch) or JavaScript Date instance
 * @returns {Attribution} This instance
 */
Attribution.prototype.setModified = function(date){
  if(date){
    this.modified = new Date(date);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Attribution.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, Attribution.jsonProps);
};

module.exports = Attribution;