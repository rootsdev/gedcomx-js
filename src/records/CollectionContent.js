module.exports = function(GedcomX){
  
  var utils = require('../utils');
  
  /**
   * Information about the contents of a collection.
   * 
   * @constructor
   * @param {Object} [json]
   */
  var CollectionContent = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof CollectionContent)){
      return new CollectionContent(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(CollectionContent.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  CollectionContent.prototype = Object.create(GedcomX.ExtensibleData.prototype);
  
  CollectionContent._gedxClass = CollectionContent.prototype._gedxClass = 'GedcomX.CollectionContent';
  
  CollectionContent.jsonProps = [
    'resourceType',
    'count',
    'completeness'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  CollectionContent.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {CollectionContent} this
   */
  CollectionContent.prototype.init = function(json){
    
    GedcomX.ExtensibleData.prototype.init.call(this, json);
    
    if(json){
      this.setResourceType(json.resourceType);
      this.setCount(json.count);
      this.setCompleteness(json.completeness);
    }
    return this;
  };
  
  /**
   * Set the resource type
   * 
   * @param {String} resourceType
   * @return {CollectionContent} this
   */
  CollectionContent.prototype.setResourceType = function(resourceType){
    this.resourceType = resourceType;
    return this;
  };
  
  /**
   * Get the resource type
   * 
   * @return {String} resourceType
   */
  CollectionContent.prototype.getResourceType = function(){
    return this.resourceType;
  };
  
  /**
   * Set the count
   * 
   * @param {Integer} count
   * @return {CollectionContent} this
   */
  CollectionContent.prototype.setCount = function(count){
    this.count = count;
    return this;
  };
  
  /**
   * Get the count
   * 
   * @return {Integer}
   */
  CollectionContent.prototype.getCount = function(){
    return this.count;
  };
  
  /**
   * Set the completeness
   * 
   * @param {Number} completeness A number between 0 and 1
   * @return {CollectionContent}
   */
  CollectionContent.prototype.setCompleteness = function(completeness){
    this.completeness = completeness;
    return this;
  };
  
  /**
   * Get the completeness
   * 
   * @return {Number} completeness
   */
  CollectionContent.prototype.getCompleteness = function(){
    return this.completeness;
  };
   
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  CollectionContent.prototype.toJSON = function(){
    return this._toJSON(GedcomX.ExtensibleData, CollectionContent.jsonProps);
  };
  
  GedcomX.CollectionContent = CollectionContent;
  
};