var utils = require('./utils');

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
  
  this.identifiers = {};
  
  if(json){
    if(json instanceof Identifiers){
      this.identifiers = json.identifiers;
    } else {
      this.identifiers = json;
    }
  }
};

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
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Identifiers.prototype.toJSON = function(){
  return this.identifiers;
};

module.exports = Identifiers;