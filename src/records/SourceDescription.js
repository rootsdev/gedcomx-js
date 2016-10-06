/**
 * Record extensions to SourceDescription
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.SourceDescription.jsonProps.push('titleLabel', 'sortKey', 'descriptorRef');
  
  // Override init()
  var oldSourceDescriptionInit = GedcomX.SourceDescription.prototype.init;
  GedcomX.SourceDescription.prototype.init = function(json){
    oldSourceDescriptionInit.call(this, json);
    if(json){
      this.setTitleLabel(json.titleLabel);
      this.setSortKey(json.sortKey);
      this.setDescriptorRef(json.descriptorRef);
    }
  };
  
  /**
   * Set the title label
   * 
   * @param {String} titleLabel
   * @return {SourceDescription} this
   */
  GedcomX.SourceDescription.prototype.setTitleLabel = function(titleLabel){
    this.titleLabel = titleLabel;
    return this;
  };
  
  /**
   * Get the title label
   * 
   * @return {String} titleLabel
   */
  GedcomX.SourceDescription.prototype.getTitleLabel = function(){
    return this.titleLabel;
  };
  
  /**
   * Set the sort key
   * 
   * @param {String} sortKey
   * @return {SourceDescription} this
   */
  GedcomX.SourceDescription.prototype.setSortKey = function(sortKey){
    this.sortKey = sortKey;
    return this;
  };
  
  /**
   * Get the sort key
   * 
   * @return {String} sortKey
   */
  GedcomX.SourceDescription.prototype.getSortKey = function(){
    return this.sortKey;
  };
  
  /**
   * Set the descriptor ref
   * 
   * @param {String} descriptorRef
   * @return {SourceDescription} this
   */
  GedcomX.SourceDescription.prototype.setDescriptorRef = function(descriptorRef){
    this.descriptorRef = descriptorRef;
    return this;
  };
  
  /**
   * Get the descriptor ref
   * 
   * @return {String}
   */
  GedcomX.SourceDescription.prototype.getDescriptorRef = function(){
    return this.descriptorRef;
  };
  
};