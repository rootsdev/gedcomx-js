var Conclusion = require('./Conclusion'),
    ResourceReference = require('./ResourceReference'),
    utils = require('./utils');

/**
 * A role that a specific person plays in an event.
 * 
 * @constructor
 * @param {Object} [json]
 */
var EventRole = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof EventRole)){
    return new EventRole(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Conclusion.isInstance(json)){
    return json;
  }
  
  Conclusion.call(this, json);
  
  if(json){
    this.setPerson(json.person);
    this.setType(json.type);
    this.setDetails(json.details);
  }
};

EventRole.prototype = Object.create(Conclusion.prototype);

Conclusion._gedxClass = Conclusion.prototype._gedxClass = 'GedcomX.Conclusion';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Conclusion.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the person
 * 
 * @returns {ResourceReference}
 */
EventRole.prototype.getPerson = function(){
  return this.person;
};

/**
 * Set the person
 * 
 * @param {ResourceReference} person
 * @returns {EventRole}
 */
EventRole.prototype.setPerson = function(person){
  if(person){
    this.person = ResourceReference(person);
  }
  return this;
};

/**
 * Get the type
 * 
 * @returns {String}
 */
EventRole.prototype.getType = function(){
  return this.type;
};

/**
 * Set the type
 * 
 * @param {String} type
 * @returns {EventRole}
 */
EventRole.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the details
 * 
 * @returns {String}
 */
EventRole.prototype.getDetails = function(){
  return this.details;
};

/**
 * Set the details
 * 
 * @param {String} details
 * @returns {EventRole}
 */
EventRole.prototype.setDetails = function(details){
  this.details = details;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
EventRole.prototype.toJSON = function(){
  return this._toJSON(Conclusion, [
    'person',
    'type',
    'details'
  ]);
};

module.exports = EventRole;