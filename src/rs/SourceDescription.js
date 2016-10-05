/**
 * RS extensions to SourceDescription
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.SourceDescription.jsonProps.push('sortKey', 'version');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.SourceDescription.prototype.init;
  GedcomX.SourceDescription.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setSortKey(json.sortKey);
      this.setVersion(json.version);
    }
  };
  
  /**
   * Set the sortKey
   * 
   * @param {Boolean} sortKey
   * @return {SourceDescription} this
   */
  GedcomX.SourceDescription.prototype.setSortKey = function(sortKey){
    this.sortKey = sortKey;
    return this;
  };
  
  /**
   * Get the sortKey
   * 
   * @return {Boolean} sortKey
   */
  GedcomX.SourceDescription.prototype.getSortKey = function(){
    return this.sortKey;
  };
  
  /**
   * Set the version
   * 
   * @param {String} version
   * @return {SourceDescription} this
   */
  GedcomX.SourceDescription.prototype.setVersion = function(version){
    this.version = version;
    return this;
  };
  
  /**
   * Get the version
   * 
   * @return {String}
   */
  GedcomX.SourceDescription.prototype.getVersion = function(){
    return this.version;
  };
  
};