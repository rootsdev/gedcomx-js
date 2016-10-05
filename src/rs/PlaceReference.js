/**
 * RS extensions to PlaceReference
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.PlaceReference.jsonProps.push('normalized');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.PlaceReference.prototype.init;
  GedcomX.PlaceReference.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setNormalized(json.normalized);
    }
  };
  
  /**
   * Set the normalized values
   * 
   * @param {TextValue[]} normalized
   * @return {PlaceReference} this
   */
  GedcomX.PlaceReference.prototype.setNormalized = function(normalized){
    return this._setArray(normalized, 'normalized', 'addNormalized');
  };
  
  /**
   * Add a normalized value
   * 
   * @param {TextValue} normalized
   * @return {PlaceReference} this
   */
  GedcomX.PlaceReference.prototype.addNormalized = function(normalized){
    return this._arrayPush(normalized, 'normalized', GedcomX.TextValue);
  };
  
  /**
   * Get the normalized values
   * 
   * @return {TextValue[]}
   */
  GedcomX.PlaceReference.prototype.getNormalized = function(){
    return this.normalized || [];
  };
  
};