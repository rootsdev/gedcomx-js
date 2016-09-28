var GedcomX = require('./GedcomX'),
    utils = require('./utils');

/**
 * An event.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Event = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Event)){
    return new Event(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Event.isInstance(json)){
    return json;
  }
  
  GedcomX.Subject.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setDate(json.date);
    this.setPlace(json.place);
    this.setRoles(json.roles);
  }
};

Event.prototype = Object.create(GedcomX.Subject.prototype);

Event._gedxClass = Event.prototype._gedxClass = 'GedcomX.Event';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Event.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the type
 * 
 * @returns {String}
 */
Event.prototype.getType = function(){
  return this.type;
};

/**
 * Set the type
 * 
 * @param {String} type
 * @returns {Event}
 */
Event.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the date
 * 
 * @returns {Date}
 */
Event.prototype.getDate = function(){
  return this.date;
};

/**
 * Set the date
 * 
 * @param {Date} date
 * @returns {Event}
 */
Event.prototype.setDate = function(date){
  if(date){
    this.date = GedcomX.Date(date);
  }
  return this;
};

/**
 * Get the place
 * 
 * @returns {PlaceReference}
 */
Event.prototype.getPlace = function(){
  return this.place;
};

/**
 * Set the place
 * 
 * @param {PlaceReference} place
 * @returns {Event}
 */
Event.prototype.setPlace = function(place){
  if(place){
    this.place = GedcomX.PlaceReference(place);
  }
  return this;
};

/**
 * Get the roles
 * 
 * @returns {EventRole[]}
 */
Event.prototype.getRoles = function(){
  return this.roles || [];
};

/**
 * Set the roles
 * 
 * @param {EventRole[]|Object[]} roles
 * @returns {Event}
 */
Event.prototype.setRoles = function(roles){
  return this._setArray(roles, 'roles', 'addRole');
};

/**
 * Add a role
 * 
 * @param {EventRole|Object} role
 * @returns {Event}
 */
Event.prototype.addRole = function(role){
  return this._arrayPush(role, 'roles', GedcomX.EventRole);
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Event.prototype.toJSON = function(){
  return this._toJSON(GedcomX.Subject, [
    'type',
    'date',
    'place',
    'roles'
  ]);
};

module.exports = Event;