/**
 * RS extensions to ResourceReference
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.ResourceReference.jsonProps.push('resourceId');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.ResourceReference.prototype.init;
  GedcomX.ResourceReference.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setResourceId(json.resourceId);
    }
  };
  
  /**
   * Set the resourceId
   * 
   * @function setResourceId
   * @instance
   * @memberof ResourceReference
   * @param {Boolean} resourceId
   * @return {ResourceReference} this
   */
  GedcomX.ResourceReference.prototype.setResourceId = function(resourceId){
    this.resourceId = resourceId;
    return this;
  };
  
  /**
   * Get the resourceId
   * 
   * @function getResourceId
   * @instance
   * @memberof ResourceReference
   * @return {Boolean} resourceId
   */
  GedcomX.ResourceReference.prototype.getResourceId = function(){
    return this.resourceId;
  };
  
};