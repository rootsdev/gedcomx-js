var ExtensibleData = require('./ExtensibleData'),
    Qualifier = require('./Qualifier');

/**
 * A part of a name.
 * 
 * @constructor
 * @param {Object} [json]
 */
var NamePart = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof NamePart)){
    return new NamePart(json);
  }
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setValue(json.value);
    this.setType(json.type);
    this.setQualifiers(json.qualifiers);
  }
};

NamePart.prototype = Object.create(ExtensibleData.prototype);

/**
 * Get the type
 * 
 * @returns {String} type
 */
NamePart.prototype.getType = function(){
  return this.type;
};

/**
 * Set the type
 * 
 * @param {String} type
 * @returns {NamePart} This instance
 */
NamePart.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the value
 * 
 * @returns {String}
 */
NamePart.prototype.getValue = function(){
  return this.value;
};

/**
 * Set the value
 * 
 * @param {String} value
 * @returns {NamePart} This instance
 */
NamePart.prototype.setValue = function(value){
  this.value = value;
  return this;
};

/**
 * Get qualifiers
 * 
 * @return {Qualifer[]}
 */
NamePart.prototype.getQualifiers = function(){
  return this.qualifiers || [];
};

/**
 * Set the qualifiers
 * 
 * @param {Qualifer[]|Object[]} qualifiers
 * @returns {NamePart} This instance
 */
NamePart.prototype.setQualifiers = function(qualifiers){
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
 * @returns {NamePart} This instance
 */
NamePart.prototype.addQualifier = function(qualifier){
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
NamePart.prototype.toJSON = function(){
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.type){
    json.type = this.type;
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

module.exports = NamePart;