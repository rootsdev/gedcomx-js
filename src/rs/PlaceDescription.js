/**
 * RS extensions to PlaceDescription
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.PlaceDescription.jsonProps.push('display');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.PlaceDescription.prototype.init;
  GedcomX.PlaceDescription.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setDisplay(json.display);
    }
  };
  
  /**
   * Set the display properties
   * 
   * @function setDisplay
   * @instance
   * @memberof PlaceDescription
   * @param {PlaceDisplayProperties} display
   * @return {PlaceDescription} this
   */
  GedcomX.PlaceDescription.prototype.setDisplay = function(display){
    if(display){
      this.display = GedcomX.PlaceDisplayProperties(display);
    }
    return this;
  };
  
  /**
   * Get the display properties
   * 
   * @function getDisplay
   * @instance
   * @memberof PlaceDescription
   * @return {PlaceDisplayProperties}
   */
  GedcomX.PlaceDescription.prototype.getDisplay = function(){
    return this.display;
  };
  
};