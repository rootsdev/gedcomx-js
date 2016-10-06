/**
 * Rrecord extensions to ExtensibleData
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.ExtensibleData.jsonProps.push('fields');
  
  // Override init()
  var oldExtensibleDataInit = GedcomX.ExtensibleData.prototype.init;
  GedcomX.ExtensibleData.prototype.init = function(json){
    oldExtensibleDataInit.call(this, json);
    if(json){
      this.setFields(json.fields);
    }
  };
  
  /**
   * Set the fields
   * 
   * @param {Field[]} fields
   * @return {ExtensibleData} this
   */
  GedcomX.ExtensibleData.prototype.setFields = function(fields){
    return this._setArray(fields, 'fields', 'addField');
  };
  
  /**
   * Add a field
   * 
   * @param {Field} field
   * @return {ExtensibleData} this
   */
  GedcomX.ExtensibleData.prototype.addField = function(field){
    return this._arrayPush(field, 'fields', GedcomX.Field);
  };
  
  /**
   * Get the fields
   * 
   * @return {Field[]}
   */
  GedcomX.ExtensibleData.prototype.getFields = function(){
    return this.fields || [];
  };
  
};