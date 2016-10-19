/**
 * Record extensions to Person
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Person.jsonProps.push('principal');
  
  // Override init()
  var oldPersonInit = GedcomX.Person.prototype.init;
  GedcomX.Person.prototype.init = function(json){
    oldPersonInit.call(this, json);
    if(json){
      this.setPrincipal(json.principal);
    }
  };
  
  /**
   * Set the principal flag
   * 
   * @function setPrincipal
   * @instance
   * @memberof Person
   * @param {Boolean} principal
   * @return {Person} this
   */
  GedcomX.Person.prototype.setPrincipal = function(principal){
    this.principal = principal;
    return this;
  };
  
  /**
   * Get the principal flag
   * 
   * @function getPrincipal
   * @instance
   * @memberof Person
   * @return {Boolean}
   */
  GedcomX.Person.prototype.getPrincipal = function(){
    return this.principal;
  };
  
};