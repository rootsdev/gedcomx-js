/**
 * Record extensions to Fact
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Fact.jsonProps.push('primary');
  
  // Override init()
  var oldFactInit = GedcomX.Fact.prototype.init;
  GedcomX.Fact.prototype.init = function(json){
    oldFactInit.call(this, json);
    if(json){
      this.setPrimary(json.primary);
    }
  };
  
  /**
   * Set the primary flag
   * 
   * @param {Boolean} primary
   * @return {Fact} this
   */
  GedcomX.Fact.prototype.setPrimary = function(primary){
    this.primary = primary;
    return this;
  };
  
  /**
   * Get the primary flag
   * 
   * @return {Boolean}
   */
  GedcomX.Fact.prototype.getPrimary = function(){
    return this.primary;
  };
  
};