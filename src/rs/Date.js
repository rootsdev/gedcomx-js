/**
 * RS extensions to Date
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Date.jsonProps.push('normalized');
  
  // Override init() so that we can deserialize normalized values
  var oldInit = GedcomX.Date.prototype.init;
  GedcomX.Date.prototype.init = function(json){
    oldInit.call(this, json);
    if(json){
      this.setNormalized(json.normalized);
    }
  };
  
  /**
   * Set the normalized values
   * 
   * @function setNormalized
   * @instance
   * @memberof Date
   * @param {TextValue[]} normalized
   * @return {Date} this
   */
  GedcomX.Date.prototype.setNormalized = function(normalized){
    return this._setArray(normalized, 'normalized', 'addNormalized');
  };
  
  /**
   * Add a normalized value
   * 
   * @function addNormalized
   * @instance
   * @memberof Date
   * @param {TextValue} normalized
   * @return {Date} this
   */
  GedcomX.Date.prototype.addNormalized = function(normalized){
    return this._arrayPush(normalized, 'normalized', GedcomX.TextValue);
  };
  
  /**
   * Get the normalized values
   * 
   * @function getNormalized
   * @instance
   * @memberof Date
   * @return {TextValue[]}
   */
  GedcomX.Date.prototype.getNormalized = function(){
    return this.normalized || [];
  };
  
};