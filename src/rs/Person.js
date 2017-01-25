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
   * @function setLiving
   * @instance
   * @memberof Person
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
   * @function getLiving
   * @instance
   * @memberof Person
   * @return {Boolean} living
   */
  GedcomX.Person.prototype.getLiving = function(){
    return this.living;
  };
  
  /**
   * Set the display properties
   * 
   * @function setDisplay
   * @instance
   * @memberof Person
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
   * @function getDisplay
   * @instance
   * @memberof Person
   * @return {DisplayProperties}
   */
  GedcomX.Person.prototype.getDisplay = function(){
    return this.display;
  };
  
  /**
   * Get a person's preferred name, if one exists.
   * 
   * @function getPreferredName
   * @instance
   * @memberof Person
   * @return {Name}
   */
  GedcomX.Person.prototype.getPreferredName = function(){
    return this.getNames().find(function(n){
      return n.getPreferred();
    });
  };
  
};