module.exports = function(GedcomX){
  
  var utils = require('../utils');
  
  /**
   * Metadata about the structure and layout of a field, as well as the expected
   * data to be extracted from a field.
   * 
   * @see {@link https://github.com/FamilySearch/gedcomx-record/blob/master/specifications/record-specification.md#field-value-descriptor|GEDCOM X Records Spec}
   * 
   * @class FieldValueDescriptor
   * @extends ExtensibleData
   * @param {Object} [json]
   */
  var FieldValueDescriptor = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof FieldValueDescriptor)){
      return new FieldValueDescriptor(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(FieldValueDescriptor.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  FieldValueDescriptor.prototype = Object.create(GedcomX.ExtensibleData.prototype);
  
  FieldValueDescriptor._gedxClass = FieldValueDescriptor.prototype._gedxClass = 'GedcomX.FieldValueDescriptor';
  
  FieldValueDescriptor.jsonProps = [
    'type',
    'labelId',
    'optional',
    'displayLabels'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  FieldValueDescriptor.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {FieldValueDescriptor} this
   */
  FieldValueDescriptor.prototype.init = function(json){
    
    GedcomX.ExtensibleData.prototype.init.call(this, json);
    
    if(json){
      this.setOptional(json.optional);
      this.setType(json.type);
      this.setLabelId(json.labelId);
      this.setDisplayLabels(json.displayLabels);
    }
    return this;
  };
  
  /**
   * Set the optional flag
   * 
   * @param {Boolean} optional
   * @return {FieldValueDescriptor} this
   */
  FieldValueDescriptor.prototype.setOptional = function(optional){
    this.optional = optional;
    return this;
  };
  
  /**
   * Get the optional flag
   * 
   * @return {Boolean}
   */
  FieldValueDescriptor.prototype.getOptional = function(){
    return this.optional;
  };
  
  /**
   * Set the type
   * 
   * @param {String} type
   * @return {FieldValueDescriptor} this
   */
  FieldValueDescriptor.prototype.setType = function(type){
    this.type = type;
    return this;
  };
  
  /**
   * Get the type
   * 
   * @return {String} type
   */
  FieldValueDescriptor.prototype.getType = function(){
    return this.type;
  };
  
  /**
   * Set the label ID
   * 
   * @param {String} labelId
   * @return {FieldValueDescriptor} this
   */
  FieldValueDescriptor.prototype.setLabelId = function(labelId){
    this.labelId = labelId;
    return this;
  };
  
  /**
   * Get the label ID
   * 
   * @return {String} label ID
   */
  FieldValueDescriptor.prototype.getLabelId = function(){
    return this.labelId;
  };
  
  /**
   * Set the display labels
   * 
   * @param {TextValue[]} labels
   * @return {FieldValueDescriptor} this
   */
  FieldValueDescriptor.prototype.setDisplayLabels = function(labels){
    return this._setArray(labels, 'displayLabels', 'addDisplayLabel');
  };
  
  /**
   * Add a display label
   * 
   * @param {TextValue} label
   * @return {FieldValueDescriptor} this
   */
  FieldValueDescriptor.prototype.addDisplayLabel = function(label){
    return this._arrayPush(label, 'displayLabels', GedcomX.TextValue);
  };
  
  /**
   * Get the display labels
   * 
   * @return {TextValue[]} labels
   */
  FieldValueDescriptor.prototype.getDisplayLabels = function(){
    return this.displayLabels || [];
  };
   
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  FieldValueDescriptor.prototype.toJSON = function(){
    return this._toJSON(GedcomX.ExtensibleData, FieldValueDescriptor.jsonProps);
  };
  
  GedcomX.FieldValueDescriptor = FieldValueDescriptor;
  
};