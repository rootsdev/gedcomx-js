var Conclusion = require('./Conclusion'),
    ResourceReference = require('./ResourceReference');

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
  
  Conclusion.call(this, json);
  
  if(json){
    this.setPerson(json.person);
    this.setType(json.type);
    this.setDetails(json.details);
  }
};

EventRole.prototype = Object.create(Conclusion.prototype);

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
  var json = Conclusion.prototype.toJSON.call(this);
  
  if(this.person){
    json.person = this.person.toJSON();
  }
  
  if(this.type){
    json.type = this.type;
  }
  
  if(this.details){
    json.details = this.details;
  }
  
  return json;
};

module.exports = EventRole;