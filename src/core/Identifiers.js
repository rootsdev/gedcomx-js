var utils = require('../utils'),
    Base = require('../Base');

/**
 * Manage the set of identifers for an object.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Identifiers = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Identifiers)){
    return new Identifiers(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Identifiers.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Base.prototype = Object.create(Base.prototype);

Identifiers._gedxClass = Identifiers.prototype._gedxClass = 'GedcomX.Identifiers';

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Identifiers.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Identifiers} this
 */
Identifiers.prototype.init = function(json){
  
  Base.prototype.init.call(this, json);
  
  this.identifiers = {};
  
  if(json){
    this.identifiers = json;
    
    // The spec allows for types with single values to "forgo the array and use
    // a single string" but that's a pain to keep track of so we're going to
    // convert all single strings into arrays
    for(var a in this.identifiers){
      if(this.identifiers.hasOwnProperty(a) && !Array.isArray(this.identifiers[a])){
        this.identifiers[a] = [ this.identifiers[a] ];
      }
    }
  }
  return this;
};

/**
 * Get the values for a given type
 * 
 * @param {String=} type If not specified then values with no associated type
 * are returned.
 * @return {String[]}
 */
Identifiers.prototype.getValues = function(type){
  if(typeof type === 'undefined'){
    type = '$';
  }
  return this.identifiers[type] || [];
};

/**
 * Set the values for a given type
 * 
 * @param {String[]} values
 * @param {String=} type
 */
Identifiers.prototype.setValues = function(values, type){
  if(typeof type === 'undefined'){
    type = '$';
  }
  if(Array.isArray(values)){
    this.identifiers[type] = values;
  }
  return this;
};

/**
 * Add a value for a given type
 * 
 * @param {String} value
 * @param {String=} type
 */
Identifiers.prototype.addValue = function(value, type){
  if(typeof type === 'undefined'){
    type = '$';
  }
  if(!Array.isArray(this.identifiers[type])){
    this.identifiers[type] = [];
  }
  this.identifiers[type].push(value);
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Identifiers.prototype.toJSON = function(){
  return this.identifiers;
};

module.exports = Identifiers;