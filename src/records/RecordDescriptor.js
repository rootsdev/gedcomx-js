module.exports = function(GedcomX){
  
  var utils = require('../utils');
  
  /**
   * Metadata about the structure and layout of a record, as well as the expected
   * data to be extracted from a record.
   * 
   * @class
   * @extends ExtensibleData
   * @param {Object} [json]
   */
  var RecordDescriptor = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof RecordDescriptor)){
      return new RecordDescriptor(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(RecordDescriptor.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  RecordDescriptor.prototype = Object.create(GedcomX.ExtensibleData.prototype);
  
  RecordDescriptor._gedxClass = RecordDescriptor.prototype._gedxClass = 'GedcomX.RecordDescriptor';
  
  RecordDescriptor.jsonProps = [
    'lang',
    'fields'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  RecordDescriptor.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {RecordDescriptor} this
   */
  RecordDescriptor.prototype.init = function(json){
    
    GedcomX.ExtensibleData.prototype.init.call(this, json);
    
    if(json){
      this.setLang(json.lang);
      this.setFields(json.fields);
    }
    return this;
  };
  
  /**
   * Set the lang
   * 
   * @param {String} lang
   * @return {RecordDescriptor} this
   */
  RecordDescriptor.prototype.setLang = function(lang){
    this.lang = lang;
    return this;
  };
  
  /**
   * Get the lang
   * 
   * @return {String} lang
   */
  RecordDescriptor.prototype.getLang = function(){
    return this.lang;
  };
  
  /**
   * Set the fields
   * 
   * @param {FieldDescriptor[]} fields
   * @return {RecordDescriptor} this
   */
  RecordDescriptor.prototype.setFields = function(fields){
    return this._setArray(fields, 'fields', 'addField');
  };
  
  /**
   * Add a field
   * 
   * @param {FieldDescriptor} field
   * @return {RecordDescriptor} this
   */
  RecordDescriptor.prototype.addField = function(field){
    return this._arrayPush(field, 'fields', GedcomX.FieldDescriptor);
  };
  
  /**
   * Get the fields
   * 
   * @return {FieldDescriptor[]}
   */
  RecordDescriptor.prototype.getFields = function(){
    return this.fields || [];
  };
   
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  RecordDescriptor.prototype.toJSON = function(){
    return this._toJSON(GedcomX.ExtensibleData, RecordDescriptor.jsonProps);
  };
  
  GedcomX.RecordDescriptor = RecordDescriptor;
  
};