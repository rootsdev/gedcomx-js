module.exports = function(GedcomX){

  var utils = require('../utils'),
      AtomCommon = require('./AtomCommon');
  
  /**
   * Common schema for atom authors and contributors.
   * 
   * @see {@link https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/atom-model-specification.md#atom-json-media-type|GEDCOM X Atom JSON Spec}
   * @see {@link https://tools.ietf.org/html/rfc4287#appendix-B|RFC 4287}
   * 
   * @class
   * @extends AtomCommon
   * @param {Object} [json]
   */
  var AtomPerson = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof AtomPerson)){
      return new AtomPerson(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(AtomPerson.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  AtomPerson.prototype = Object.create(AtomCommon.prototype);
  
  AtomPerson._gedxClass = AtomPerson.prototype._gedxClass = 'GedcomX.AtomPerson';
  
  AtomPerson.jsonProps = [
    'uri',
    'name',
    'email'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  AtomPerson.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {AtomPerson} this
   */
  AtomPerson.prototype.init = function(json){
    
    AtomCommon.prototype.init.call(this, json);
    
    if(json){
      this.setUri(json.uri);
      this.setName(json.name);
      this.setEmail(json.email);
    }
    return this;
  };
  
  /**
   * Set the uri
   * 
   * @param {String} uri
   * @return {AtomPerson} this
   */
  AtomPerson.prototype.setUri = function(uri){
    this.uri = uri;
    return this;
  };
  
  /**
   * Get the uri
   * 
   * @return {String} this
   */
  AtomPerson.prototype.getUri = function(){
    return this.uri;
  };
  
  /**
   * Set the name
   * 
   * @param {String} name
   * @return {AtomPerson} this
   */
  AtomPerson.prototype.setName = function(name){
    this.name = name;
    return this;
  };
  
  /**
   * Get the name
   * 
   * @return {String} this
   */
  AtomPerson.prototype.getName = function(){
    return this.name;
  };
  
  /**
   * Set the email
   * 
   * @param {String} email
   * @return {AtomPerson} this
   */
  AtomPerson.prototype.setEmail = function(email){
    this.email = email;
    return this;
  };
  
  /**
   * Get the name
   * 
   * @return {String} this
   */
  AtomPerson.prototype.getEmail = function(){
    return this.email;
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  AtomPerson.prototype.toJSON = function(){
    return this._toJSON(AtomCommon, AtomPerson.jsonProps);
  };
  
  GedcomX.AtomPerson = AtomPerson;

};