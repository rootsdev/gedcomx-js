module.exports = function(GedcomX){
  
  var utils = require('../utils');
  
  /**
   * Information about the fields of a record from which genealogical data is extracted.
   * 
   * @class
   * @extends ExtensibleData
   * @param {Object} [json]
   */
  var Field = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Field)){
      return new Field(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Field.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  Field.prototype = Object.create(GedcomX.ExtensibleData.prototype);
  
  Field._gedxClass = Field.prototype._gedxClass = 'GedcomX.Field';
  
  Field.jsonProps = [
    'type',
    'values'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  Field.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {Field} this
   */
  Field.prototype.init = function(json){
    
    GedcomX.ExtensibleData.prototype.init.call(this, json);
    
    if(json){
      this.setType(json.type);
      this.setValues(json.values);
    }
    return this;
  };
  
  /**
   * Set the type
   * 
   * @param {String} type
   * @return {Field} this
   */
  Field.prototype.setType = function(type){
    this.type = type;
    return this;
  };
  
  /**
   * Get the type
   * 
   * @return {String} type
   */
  Field.prototype.getType = function(){
    return this.type;
  };
  
  /**
   * Set the values
   * 
   * @param {FieldValue[]} values
   * @return {Field} this
   */
  Field.prototype.setValues = function(values){
    return this._setArray(values, 'values', 'addValue');
  };
  
  /**
   * Add a value
   * 
   * @param {FieldValue} value
   * @return {Field} this
   */
  Field.prototype.addValue = function(value){
    return this._arrayPush(value, 'values', GedcomX.FieldValue);
  };
  
  /**
   * Get the values
   * 
   * @return {FieldValue[]} values
   */
  Field.prototype.getValues = function(){
    return this.values || [];
  };
   
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  Field.prototype.toJSON = function(){
    return this._toJSON(GedcomX.ExtensibleData, Field.jsonProps);
  };
  
  GedcomX.Field = Field;
  
};