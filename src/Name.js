var Conclusion = require('./Conclusion'),
    NameForm = require('./NameForm'),
    GDate = require('./Date');

/**
 * A name.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Name = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Name)){
    return new Name(json);
  }
  
  Conclusion.call(this, json);
  
  if(json){
    this.setType(json.type);
    this.setDate(json.date);
    this.setNameForms(json.nameForms);
  }
};

Name.prototype = Object.create(Conclusion.prototype);

/**
 * Get the name type
 * 
 * @returns {String} type
 */
Name.prototype.getType = function(){
  return this.type;
};

/**
 * Set the name type
 * 
 * @param {String} type
 * @returns {Name} This instance
 */
Name.prototype.setType = function(type){
  this.type = type;
  return this;
};

/**
 * Get the date
 * 
 * @returns {Date} date
 */
Name.prototype.getDate = function(){
  return this.date;
};

/**
 * Set the date
 * 
 * @param {Date|Object} date
 * @returns {Fact} This instance
 */
Name.prototype.setDate = function(date){
  if(date){
    this.date = GDate(date);
  }
  return this;
};

/**
 * Get the name forms
 * 
 * @return {NameForm[]}
 */
Name.prototype.getNameForms = function(){
  return this.nameForms || [];
};

/**
 * Set the name forms
 * 
 * @param {NameForm[]|Object[]} nameForms
 * @returns {Name} This instance
 */
Name.prototype.setNameForms = function(nameForms){
  if(Array.isArray(nameForms)){
    this.nameForms = [];
    var name = this;
    nameForms.forEach(function(n){
      name.addNameForm(n);
    });
  }
};

/**
 * Add a name form
 * 
 * @param {NameForm|Object} nameForm
 * @returns {Name} This instance
 */
Name.prototype.addNameForm = function(nameForm){
  if(nameForm){
    if(!Array.isArray(this.nameForms)){
      this.nameForms = [];
    }
    this.nameForms.push(NameForm(nameForm));
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Name.prototype.toJSON = function(){
  var json = Conclusion.prototype.toJSON.call(this);
  
  if(this.type){
    json.type = this.type;
  }
  
  if(this.date){
    json.date = this.date.toJSON();
  }
  
  if(this.nameForms){
    json.nameForms = this.nameForms.map(function(n){
      return n.toJSON();
    });
  }
  
  return json;
};

module.exports = Name;