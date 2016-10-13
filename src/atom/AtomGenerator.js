module.exports = function(GedcomX){

  var utils = require('../utils'),
      AtomCommon = require('./AtomCommon');
  
  /**
   * The agent used to generate a feed
   * 
   * @see {@link https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/atom-model-specification.md#atom-json-media-type|GEDCOM X Atom JSON Spec}
   * @see {@link https://tools.ietf.org/html/rfc4287#section-4.2.4|RFC 4287}
   * 
   * @class
   * @extends AtomCommon
   * @param {Object} [json]
   */
  var AtomGenerator = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof AtomGenerator)){
      return new AtomGenerator(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(AtomGenerator.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  AtomGenerator.prototype = Object.create(AtomCommon.prototype);
  
  AtomGenerator._gedxClass = AtomGenerator.prototype._gedxClass = 'GedcomX.AtomGenerator';
  
  AtomGenerator.jsonProps = [
    'uri',
    'version',
    'value'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  AtomGenerator.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {AtomGenerator} this
   */
  AtomGenerator.prototype.init = function(json){
    
    AtomCommon.prototype.init.call(this, json);
    
    if(json){
      this.setUri(json.uri);
      this.setVersion(json.version);
      this.setValue(json.value);
    }
    return this;
  };
  
  /**
   * Set the uri
   * 
   * @param {String} uri
   * @return {AtomGenerator} this
   */
  AtomGenerator.prototype.setUri = function(uri){
    this.uri = uri;
    return this;
  };
  
  /**
   * Get the uri
   * 
   * @return {String} this
   */
  AtomGenerator.prototype.getUri = function(){
    return this.uri;
  };
  
  /**
   * Set the version
   * 
   * @param {String} version
   * @return {AtomGenerator} this
   */
  AtomGenerator.prototype.setVersion = function(version){
    this.version = version;
    return this;
  };
  
  /**
   * Get the version
   * 
   * @return {String} this
   */
  AtomGenerator.prototype.getVersion = function(){
    return this.version;
  };
  
  /**
   * Set the value
   * 
   * @param {String} value
   * @return {AtomGenerator} this
   */
  AtomGenerator.prototype.setValue = function(value){
    this.value = value;
    return this;
  };
  
  /**
   * Get the value
   * 
   * @return {String} this
   */
  AtomGenerator.prototype.getValue = function(){
    return this.value;
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  AtomGenerator.prototype.toJSON = function(){
    return this._toJSON(AtomCommon, AtomGenerator.jsonProps);
  };
  
  GedcomX.AtomGenerator = AtomGenerator;

};