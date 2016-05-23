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
  
  this.identifiers = {};
  
  if(json){
    if(json instanceof Identifiers){
      this.identifiers = json.identifiers;
    } else {
      this.identifiers = json;
    }
  }
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