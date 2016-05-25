var Subject = require('./Subject'),
    GDate = require('./Date'),
    PlaceReference = require('./PlaceReference'),
    EventRole = require('./EventRole');

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
  
  Subject.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setDate(json.date);
    this.setPlace(json.place);
    this.setRoles(json.roles);
  }
};

Event.prototype = Object.create(Subject.prototype);

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
    this.date = GDate(date);
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
    this.place = PlaceReference(place);
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
  if(Array.isArray(roles)){
    var event = this;
    event.roles = [];
    roles.forEach(function(r){
      event.addRole(r);
    });
  }
  return this;
};

/**
 * Add a role
 * 
 * @param {EventRole|Object} role
 * @returns {Event}
 */
Event.prototype.addRole = function(role){
  if(role){
    if(!Array.isArray(this.roles)){
      this.roles = [];
    }
    this.roles.push(EventRole(role));
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Event.prototype.toJSON = function(){
  var json = Subject.prototype.toJSON.call(this);
  
  if(this.type){
    json.type = this.type;
  }
  
  if(this.date){
    json.date = this.date.toJSON();
  }
  
  if(this.place){
    json.place = this.place.toJSON();
  }
  
  if(this.roles){
    json.roles = this.roles.map(function(r){
      return r.toJSON();
    });
  }
  
  return json;
};

module.exports = Event;