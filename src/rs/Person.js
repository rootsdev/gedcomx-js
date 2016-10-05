/**
 * RS extensions to Person
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Person.jsonProps.push('living', 'display');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Person.prototype.init;
  GedcomX.Person.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setLiving(json.living);
      this.setDisplay(json.display);
    }
  };
  
  /**
   * Set the living flag
   * 
   * @param {Boolean} living
   * @return {Person} this
   */
  GedcomX.Person.prototype.setLiving = function(living){
    this.living = living;
    return this;
  };
  
  /**
   * Get the living flag
   * 
   * @return {Boolean} living
   */
  GedcomX.Person.prototype.getLiving = function(){
    return this.living;
  };
  
  /**
   * Set the display properties
   * 
   * @param {DisplayProperties} display
   * @return {Person} this
   */
  GedcomX.Person.prototype.setDisplay = function(display){
    if(display){
      this.display = GedcomX.DisplayProperties(display);
    }
    return this;
  };
  
  /**
   * Get the display properties
   * 
   * @return {DisplayProperties}
   */
  GedcomX.Person.prototype.getDisplay = function(){
    return this.display;
  };
  
};