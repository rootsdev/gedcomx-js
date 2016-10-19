/**
 * Records extensions to Root
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Root.jsonProps.push('recordDescriptors', 'collections');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Root.prototype.init;
  GedcomX.Root.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setRecordDescriptors(json.recordDescriptors);
      this.setCollections(json.collections);
    }
  };
  
  /**
   * Set the record descriptors
   * 
   * @function setRecordDescriptors
   * @instance
   * @memberof Root
   * @param {RecordDescriptor[]} recordDescriptors
   * @return {Root} this
   */
  GedcomX.Root.prototype.setRecordDescriptors = function(recordDescriptors){
    return this._setArray(recordDescriptors, 'recordDescriptors', 'addRecordDescriptor');
  };
  
  /**
   * Add a record descriptor
   * 
   * @function addRecordDescriptor
   * @instance
   * @memberof Root
   * @param {RecordDescriptor} recordDescriptor
   * @return {Root} this
   */
  GedcomX.Root.prototype.addRecordDescriptor = function(recordDescriptor){
    return this._arrayPush(recordDescriptor, 'recordDescriptors', GedcomX.RecordDescriptor);
  };
  
  /**
   * Get the recordDescriptors
   * 
   * @function getRecordDescriptors
   * @instance
   * @memberof Root
   * @return {Boolean} recordDescriptors
   */
  GedcomX.Root.prototype.getRecordDescriptors = function(){
    return this.recordDescriptors || [];
  };
  
  /**
   * Set the collections
   * 
   * @function setCollections
   * @instance
   * @memberof Root
   * @param {Collection[]} collections
   * @return {Root} this
   */
  GedcomX.Root.prototype.setCollections = function(collections){
    return this._setArray(collections, 'collections', 'addCollection');
  };
  
  /**
   * Add a collection
   * 
   * @function addCollection
   * @instance
   * @memberof Root
   * @param {Collection} collection
   * @return {Root} this
   */
  GedcomX.Root.prototype.addCollection = function(collection){
    return this._arrayPush(collection, 'collections', GedcomX.Collection);
  };
  
  /**
   * Get the collections
   * 
   * @function getCollections
   * @instance
   * @memberof Root
   * @return {Collection[]} collections
   */
  GedcomX.Root.prototype.getCollections = function(){
    return this.collections || [];
  };
  
};