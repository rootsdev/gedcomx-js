/**
 * Record extensions to Coverage
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.Coverage.jsonProps.push('recordType');
  
  // Override init()
  var oldCoverageInit = GedcomX.Coverage.prototype.init;
  GedcomX.Coverage.prototype.init = function(json){
    oldCoverageInit.call(this, json);
    if(json){
      this.setRecordType(json.recordType);
    }
  };
  
  /**
   * Set the record type
   * 
   * @param {String} recordType
   * @return {Coverage} this
   */
  GedcomX.Coverage.prototype.setRecordType = function(recordType){
    this.recordType = recordType;
    return this;
  };
  
  /**
   * Get the record type
   * 
   * @return {String} recordType
   */
  GedcomX.Coverage.prototype.getRecordType = function(){
    return this.recordType;
  };
  
};