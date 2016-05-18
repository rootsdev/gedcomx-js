var ExtensibleData = require('./ExtensibleData'),
    Attribution = require('./Attribution');

/**
 * A note about a resource.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Note = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Note)){
    return new Note(json);
  }
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setLang(json.lang);
    this.setSubject(json.subject);
    this.setText(json.text);
    this.setAttribution(json.attribution);
  }
};

Note.prototype = Object.create(ExtensibleData.prototype);

/**
 * Get the language identifier.
 * 
 * @returns {String} lang
 */
Note.prototype.getLang = function(){
  return this.lang;
};

/**
 * Set the language identifier.
 * 
 * @param {String} lang
 * @returns {Note} This instance.
 */
Note.prototype.setLang = function(lang){
  this.lang = lang;
  return this;
};

/**
 * Get the subject.
 */
Note.prototype.getSubject = function(){
  return this.subject;
};

/**
 * Set the subject.
 * 
 * @param {String} subject
 * @returns {Note} This note.
 */
Note.prototype.setSubject = function(subject){
  this.subject = subject;
  return this;
};

/**
 * Get the text.
 * 
 * @returns {String} text
 */
Note.prototype.getText = function(){
  return this.text;
};

/**
 * Set the text.
 * 
 * @param {String} text
 * @returns {Note} This note.
 */
Note.prototype.setText = function(text){
  this.text = text;
  return this;
};

/**
 * Get the attribution.
 * 
 * @returns {Attribution}
 */
Note.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set the attribution
 * 
 * @param {Object|Attribution} attribution
 * @returns {Note} This instance.
 */
Note.prototype.setAttribution = function(attribution){
  if(attribution){
    this.attribution = new Attribution(attribution);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Note.prototype.toJSON = function(){
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.lang){
    json.lang = this.lang;
  }
  
  if(this.subject){
    json.subject = this.subject;
  }
  
  if(this.text){
    json.text = this.text;
  }
  
  if(this.attribution){
    json.attribution = this.attribution.toJSON();
  }
  
  return json;
};

module.exports = Note;