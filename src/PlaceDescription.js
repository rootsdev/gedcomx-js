var Subject = require('./Subject'),
    ResourceReference = require('./ResourceReference'),
    TextValue = require('./TextValue'),
    GDate = require('./Date'),
    utils = require('./utils');

/**
 * A description of a place
 * 
 * @constructor
 * @param {Object} [json]
 */
var PlaceDescription = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof PlaceDescription)){
    return new PlaceDescription(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(PlaceDescription.isInstance(json)){
    return json;
  }
  
  Subject.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setNames(json.names);
    this.setPlace(json.place);
    this.setJurisdiction(json.jurisdiction);
    this.setTemporalDescription(json.temporalDescription);
    this.setSpatialDescription(json.spatialDescription);
    this.setLatitude(json.latitude);
    this.setLongitude(json.longitude);
  }
};

PlaceDescription.prototype = Object.create(Subject.prototype);

PlaceDescription._gedxClass = PlaceDescription.prototype._gedxClass = 'GedcomX.PlaceDescription';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
PlaceDescription.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the type
 * 
 * @returns {String}
 */
PlaceDescription.prototype.getType = function(){
  return this.type;
};

/**
 * Set the type
 * 
 * @param {String} type
 * @returns {PlaceDescription}
 */
PlaceDescription.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the names
 * 
 * @returns {TextValue[]}
 */
PlaceDescription.prototype.getNames = function(){
  return this.names || [];
};

/**
 * Set the names
 * 
 * @param {TextValue[]|Object[]} names
 * @returns {PlaceDescription}
 */
PlaceDescription.prototype.setNames = function(names){
  if(Array.isArray(names)){
    var place = this;
    place.names = [];
    names.forEach(function(n){
      place.addName(n);
    });
  }
  return this;
};

/**
 * Add the name
 * 
 * @param {TextValue|Object} name
 * @returns {PlaceDescription}
 */
PlaceDescription.prototype.addName = function(name){
  if(name){
    if(!Array.isArray(this.names)){
      this.names = [];
    }
    this.names.push(TextValue(name));
  }
  return this;
};

/**
 * Get the place
 * 
 * @returns {ResourceReference}
 */
PlaceDescription.prototype.getPlace = function(){
  return this.place;
};

/**
 * Set the place
 * 
 * @param {ResourceReference} place
 * @returns {PlaceDescription}
 */
PlaceDescription.prototype.setPlace = function(place){
  if(place){
    this.place = ResourceReference(place);
  }
  return this;
};

/**
 * Get the jurisdiction
 * 
 * @returns {ResourceReference}
 */
PlaceDescription.prototype.getJurisdiction = function(){
  return this.jurisdiction;
};

/**
 * Set the jurisdiction
 * 
 * @param {ResourceReference} jurisdiction
 * @returns {PlaceDescription}
 */
PlaceDescription.prototype.setJurisdiction = function(jurisdiction){
  if(jurisdiction){
    this.jurisdiction = ResourceReference(jurisdiction);
  }
  return this;
};

/**
 * Get the latitude
 * 
 * @returns {Number}
 */
PlaceDescription.prototype.getLatitude = function(){
  return this.latitude;
};

/**
 * Set the latutide
 * 
 * @param {Number} latitude
 * @returns {PlaceDescription}
 */
PlaceDescription.prototype.setLatitude = function(latitude){
  this.latitude = latitude;
  return this;
};

/**
 * Get the longitude
 * 
 * @returns {Number}
 */
PlaceDescription.prototype.getLongitude = function(){
  return this.longitude;
};

/**
 * Set the latutide
 * 
 * @param {Number} longitude
 * @returns {PlaceDescription}
 */
PlaceDescription.prototype.setLongitude = function(longitude){
  this.longitude = longitude;
  return this;
};

/**
 * Get the temporal description
 * 
 * @returns {Date}
 */
PlaceDescription.prototype.getTemporalDescription = function(){
  return this.temporalDescription;
};

/**
 * Set the temporal description
 * 
 * @param {Date} date
 * @returns {PlaceDescription}
 */
PlaceDescription.prototype.setTemporalDescription = function(date){
  if(date){
    this.temporalDescription = GDate(date);
  }
  return this;
};

/**
 * Get the spatial description
 * 
 * @returns {ResourceReference}
 */
PlaceDescription.prototype.getSpatialDescription = function(){
  return this.spatialDescription;
};

/**
 * Set the spatial description
 * 
 * @param {ResourceReference} spatial
 * @returns {PlaceDescription}
 */
PlaceDescription.prototype.setSpatialDescription = function(spatial){
  if(spatial){
    this.spatialDescription = ResourceReference(spatial);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
PlaceDescription.prototype.toJSON = function(){
  var json = Subject.prototype.toJSON.call(this);
  
  if(this.type){
    json.type = this.type;
  }
  
  if(this.names){
    json.names = this.names.map(function(n){
      return n.toJSON();
    });
  }
  
  if(this.place){
    json.place = this.place.toJSON();
  }
  
  if(this.jurisdiction){
    json.jurisdiction = this.jurisdiction.toJSON();
  }
  
  if(this.latitude){
    json.latitude = this.latitude;
  }
  
  if(this.longitude){
    json.longitude = this.longitude;
  }
  
  if(this.temporalDescription){
    json.temporalDescription = this.temporalDescription.toJSON();
  }
  
  if(this.spatialDescription){
    json.spatialDescription = this.spatialDescription.toJSON();
  }
  
  return json;
};

module.exports = PlaceDescription;