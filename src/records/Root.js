/**
 * Records extensions to Root
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Root.jsonProps.push('recordDescriptors');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Root.prototype.init;
  GedcomX.Root.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setRecordDescriptors(json.recordDescriptors);
    }
  };
  
  /**
   * Set the record descriptors
   * 
   * @param {RecordDescriptor[]} recordDescriptors
   * @return {Root} this
   */
  GedcomX.Root.prototype.setRecordDescriptors = function(recordDescriptors){
    return this._setArray(recordDescriptors, 'recordDescriptors', 'addRecordDescriptor');
  };
  
  /**
   * Add a record descriptor
   * 
   * @param {RecordDescriptor} recordDescriptor
   * @return {Root} this
   */
  GedcomX.Root.prototype.addRecordDescriptor = function(recordDescriptor){
    return this._arrayPush(recordDescriptor, 'recordDescriptors', GedcomX.RecordDescriptor);
  };
  
  /**
   * Get the recordDescriptors
   * 
   * @return {Boolean} recordDescriptors
   */
  GedcomX.Root.prototype.getRecordDescriptors = function(){
    return this.recordDescriptors || [];
  };
  
};