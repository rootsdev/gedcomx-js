module.exports = function(GedcomX){
  
  var utils = require('../utils');
  
  /**
   * Metadata about the structure and layout of a field, as well as the expected
   * data to be extracted from a field.
   * 
   * @constructor
   * @param {Object} [json]
   */
  var FieldDescriptor = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof FieldDescriptor)){
      return new FieldDescriptor(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(FieldDescriptor.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  FieldDescriptor.prototype = Object.create(GedcomX.ExtensibleData.prototype);
  
  FieldDescriptor._gedxClass = FieldDescriptor.prototype._gedxClass = 'GedcomX.FieldDescriptor';
  
  FieldDescriptor.jsonProps = [
    'originalLabel',
    'descriptions',
    'values'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  FieldDescriptor.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {FieldDescriptor} this
   */
  FieldDescriptor.prototype.init = function(json){
    
    GedcomX.ExtensibleData.prototype.init.call(this, json);
    
    if(json){
      this.setOriginalLabel(json.originalLabel);
      this.setDescriptions(json.descriptions);
      this.setValues(json.values);
    }
    return this;
  };
  
  /**
   * Set the original label
   * 
   * @param {String} originalLabel
   * @return {FieldDescriptor} this
   */
  FieldDescriptor.prototype.setOriginalLabel = function(originalLabel){
    this.originalLabel = originalLabel;
    return this;
  };
  
  /**
   * Get the original label
   * 
   * @return {String}
   */
  FieldDescriptor.prototype.getOriginalLabel = function(){
    return this.originalLabel;
  };
   
  /**
   * Set the descriptions
   * 
   * @param {TextValue[]} descriptions
   * @return {FieldDescriptor} this
   */
  FieldDescriptor.prototype.setDescriptions = function(descriptions){
    return this._setArray(descriptions, 'descriptions', 'addDescription');
  };
  
  /**
   * Add a description
   * 
   * @param {TextValue} description
   * @return {FieldDescriptor} this
   */
  FieldDescriptor.prototype.addDescription = function(description){
    return this._arrayPush(description, 'descriptions', GedcomX.TextValue);
  };
  
  /**
   * Get the descriptions
   * 
   * @return {TextValue[]} descriptions
   */
  FieldDescriptor.prototype.getDescriptions = function(){
    return this.descriptions || [];
  };
  
  /**
   * Set the values
   * 
   * @param {FieldValueDescriptor[]} values
   * @return {FieldDescriptor} this
   */
  FieldDescriptor.prototype.setValues = function(values){
    return this._setArray(values, 'values', 'addValue');
  };
  
  /**
   * Add a value
   * 
   * @param {FieldValueDescriptor} value
   * @return {FieldDescriptor} this
   */
  FieldDescriptor.prototype.addValue = function(value){
    return this._arrayPush(value, 'values', GedcomX.FieldValueDescriptor);
  };
  
  /**
   * Get the values
   * 
   * @return {FieldValueDescriptor[]} values
   */
  FieldDescriptor.prototype.getValues = function(){
    return this.values || [];
  };
   
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  FieldDescriptor.prototype.toJSON = function(){
    return this._toJSON(GedcomX.ExtensibleData, FieldDescriptor.jsonProps);
  };
  
  GedcomX.FieldDescriptor = FieldDescriptor;
  
};