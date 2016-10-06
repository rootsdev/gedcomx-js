/**
 * Record extensions to SourceReference
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.SourceReference.jsonProps.push('qualifiers');
  
  // Override init()
  var oldSourceReferenceInit = GedcomX.SourceReference.prototype.init;
  GedcomX.SourceReference.prototype.init = function(json){
    oldSourceReferenceInit.call(this, json);
    if(json){
      this.setQualifiers(json.qualifiers);
    }
  };
  
  /**
   * Set the qualifiers
   * 
   * @param {Qualifier[]} qualifiers
   * @return {SourceReference} this
   */
  GedcomX.SourceReference.prototype.setQualifiers = function(qualifiers){
    return this._setArray(qualifiers, 'qualifiers', 'addQualifier');
  };
  
  /**
   * Add a qualifier
   * 
   * @param {Qualifiers} qualifier
   * @return {SourceReference} this
   */
  GedcomX.SourceReference.prototype.addQualifier = function(qualifier){
    return this._arrayPush(qualifier, 'qualifiers', GedcomX.Qualifier);
  };
  
  /**
   * Get the qualifiers
   * 
   * @return {Qualifier[]} qualifiers
   */
  GedcomX.SourceReference.prototype.getQualifiers = function(){
    return this.qualifiers || [];
  };
  
};