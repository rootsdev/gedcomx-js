var Conclusion = require('./Conclusion'),
    PlaceReference = require('./PlaceReference'),
    GDate = require('./Date'),
    Qualifier = require('./Qualifier'),
    utils = require('./utils');

/**
 * A fact for a person or relationship.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Fact = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Fact)){
    return new Fact(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Fact.isInstance(json)){
    return json;
  }
  
  Conclusion.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setDate(json.date);
    this.setPlace(json.place);
    this.setValue(json.value);
    this.setQualifiers(json.qualifiers);
  }
};

Fact.prototype = Object.create(Conclusion.prototype);

Fact._gedxClass = Fact.prototype._gedxClass = 'GedcomX.Fact';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Fact.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Get the fact type
 * 
 * @returns {String} type
 */
Fact.prototype.getType = function(){
  return this.type;
};

/**
 * Set the fact type
 * 
 * @param {String} type
 * @returns {Fact} This instance
 */
Fact.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the date
 * 
 * @returns {Date} date
 */
Fact.prototype.getDate = function(){
  return this.date;
};

/**
 * Set the date
 * 
 * @param {Date|Object} date
 * @returns {Fact} This instance
 */
Fact.prototype.setDate = function(date){
  if(date){
    this.date = GDate(date);
  }
  return this;
};

/**
 * Get the place reference
 * 
 * @returns {PlaceReference}
 */
Fact.prototype.getPlace = function(){
  return this.place;
};

/**
 * Set the place reference
 *
 * @param {PlaceReference|Object} place
 * @returns {Fact} This instance
 */
Fact.prototype.setPlace = function(place){
  if(place){
    this.place = PlaceReference(place);
  }
  return this;
};

/**
 * Get the value
 * 
 * @returns {String}
 */
Fact.prototype.getValue = function(){
  return this.value;
};

/**
 * Set the value
 * 
 * @param {String} value
 * @returns {Fact} This instance
 */
Fact.prototype.setValue = function(value){
  this.value = value;
  return this;
};

/**
 * Get qualifiers
 * 
 * @return {Qualifer[]}
 */
Fact.prototype.getQualifiers = function(){
  return this.qualifiers || [];
};

/**
 * Set the qualifiers
 * 
 * @param {Qualifer[]|Object[]} qualifiers
 * @returns {Fact} This instance
 */
Fact.prototype.setQualifiers = function(qualifiers){
  if(Array.isArray(qualifiers)){
    this.qualifiers = [];
    var fact = this;
    qualifiers.forEach(function(q){
      fact.addQualifier(q);
    });
  }
};

/**
 * Add a qualifier
 * 
 * @param {Qualifier|Object} qualifier
 * @returns {Fact} This instance
 */
Fact.prototype.addQualifier = function(qualifier){
  if(qualifier){
    if(!Array.isArray(this.qualifiers)){
      this.qualifiers = [];
    }
    this.qualifiers.push(Qualifier(qualifier));
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Fact.prototype.toJSON = function(){
  var json = Conclusion.prototype.toJSON.call(this);
  
  if(this.type){
    json.type = this.type;
  }
  
  if(this.date){
    json.date = this.date.toJSON();
  }
  
  if(this.place){
    json.place = this.place.toJSON();
  }
  
  if(this.value){
    json.value = this.value;
  }
  
  if(this.qualifiers){
    json.qualifiers = this.qualifiers.map(function(q){
      return q.toJSON();
    });
  }
  
  return json;
};

module.exports = Fact;