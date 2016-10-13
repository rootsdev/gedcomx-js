module.exports = function(GedcomX){
  
  var utils = require('../utils');
  
  /**
   * Information about the value of a field.
   * 
   * @class
   * @extends Conclusion
   * @param {Object} [json]
   */
  var FieldValue = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof FieldValue)){
      return new FieldValue(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(FieldValue.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  FieldValue.prototype = Object.create(GedcomX.Conclusion.prototype);
  
  FieldValue._gedxClass = FieldValue.prototype._gedxClass = 'GedcomX.FieldValue';
  
  FieldValue.jsonProps = [
    'type',
    'labelId',
    'text',
    'datatype',
    'resource'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  FieldValue.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {FieldValue} this
   */
  FieldValue.prototype.init = function(json){
    
    GedcomX.Conclusion.prototype.init.call(this, json);
    
    if(json){
      this.setType(json.type);
      this.setLabelId(json.labelId);
      this.setText(json.text);
      this.setDataType(json.datatype);
      this.setResource(json.resource);
    }
    return this;
  };
  
  /**
   * Set the type
   * 
   * @param {String} type
   * @return {FieldValue} this
   */
  FieldValue.prototype.setType = function(type){
    this.type = type;
    return this;
  };
  
  /**
   * Get the type
   * 
   * @return {String} type
   */
  FieldValue.prototype.getType = function(){
    return this.type;
  };
  
  /**
   * Set the label id
   * 
   * @param {String} labelId
   * @return {FieldValue} this
   */
  FieldValue.prototype.setLabelId = function(labelId){
    this.labelId = labelId;
    return this;
  };
  
  /**
   * Get the label id
   * 
   * @return {String} labelId
   */
  FieldValue.prototype.getLabelId = function(){
    return this.labelId;
  };
  
  /**
   * Set the text
   * 
   * @param {String} text
   * @return {FieldValue} this
   */
  FieldValue.prototype.setText = function(text){
    this.text = text;
    return this;
  };
  
  /**
   * Get the text
   * 
   * @return {String} text
   */
  FieldValue.prototype.getText = function(){
    return this.text;
  };
  
  /**
   * Set the data type
   * 
   * @param {String} datatype
   * @return {FieldValue} this
   */
  FieldValue.prototype.setDataType = function(datatype){
    this.datatype = datatype;
    return this;
  };
  
  /**
   * Get the data type
   * 
   * @return {String} datatype
   */
  FieldValue.prototype.getDataType = function(){
    return this.datatype;
  };
  
  /**
   * Set the resource
   * 
   * @param {String} resource
   * @return {FieldValue} this
   */
  FieldValue.prototype.setResource = function(resource){
    this.resource = resource;
    return this;
  };
  
  /**
   * Get the resource
   * 
   * @return {String} resource
   */
  FieldValue.prototype.getResource = function(){
    return this.resource;
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  FieldValue.prototype.toJSON = function(){
    return this._toJSON(GedcomX.Conclusion, FieldValue.jsonProps);
  };
  
  GedcomX.FieldValue = FieldValue;
  
};