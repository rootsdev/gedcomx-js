/**
 * RS extensions to Name
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Name.jsonProps.push('preferred');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Name.prototype.init;
  GedcomX.Name.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setPreferred(json.preferred);
    }
  };
  
  /**
   * Set the preferred flag
   * 
   * @param {Boolean} preferred
   * @return {Name} this
   */
  GedcomX.Name.prototype.setPreferred = function(preferred){
    this.preferred = preferred;
    return this;
  };
  
  /**
   * Get the preferred flag
   * 
   * @return {Boolean} preferred
   */
  GedcomX.Name.prototype.getPreferred = function(){
    return this.preferred;
  };
  
};