/**
 * RS extensions to Conclusion
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Conclusion.jsonProps.push('sortKey');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Conclusion.prototype.init;
  GedcomX.Conclusion.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setSortKey(json.sortKey);
    }
  };
  
  /**
   * Set the sortKey
   * 
   * @function setSortKey
   * @instance
   * @memberof Conclusion
   * @param {Boolean} sortKey
   * @return {Conclusion} this
   */
  GedcomX.Conclusion.prototype.setSortKey = function(sortKey){
    this.sortKey = sortKey;
    return this;
  };
  
  /**
   * Get the sortKey
   * 
   * @function getSortKey
   * @instance
   * @memberof Conclusion
   * @return {Boolean} sortKey
   */
  GedcomX.Conclusion.prototype.getSortKey = function(){
    return this.sortKey;
  };
  
};