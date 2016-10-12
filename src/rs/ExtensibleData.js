/**
 * RS extensions to ExtensibleData
 */
module.exports = function(GedcomX){
  
  // Extend serialization properties
  GedcomX.ExtensibleData.jsonProps.push('links');
  
  // Override init()
  var oldExtensibleDataInit = GedcomX.ExtensibleData.prototype.init;
  GedcomX.ExtensibleData.prototype.init = function(json){
    oldExtensibleDataInit.call(this, json);
    if(json){
      this.setLinks(json.links);
    }
  };
  
  /**
   * Set the links
   * 
   * @param {Links} links
   * @return {ExtensibleData} this
   */
  GedcomX.ExtensibleData.prototype.setLinks = function(links){
    if(links){
      this.links = GedcomX.Links(links);
    }
    return this;
  };
  
  /**
   * Add a link
   * 
   * @param {Link} link
   * @return {ExtensibleData} this
   */
  GedcomX.ExtensibleData.prototype.addLink = function(link){
    if(link){
      if(!this.links){
        this.links = GedcomX.Links();
      }
      this.links.addLink(link);
    }
    return this;
  };
  
  /**
   * Get the links
   * 
   * @return {Link[]}
   */
  GedcomX.ExtensibleData.prototype.getLinks = function(){
    return this.links ? this.links.getLinks() : [];
  };
  
  /**
   * Get a link
   * 
   * @param {String} rel
   * @return {Links}
   */
  GedcomX.ExtensibleData.prototype.getLink = function(rel){
    if(this.links){
      return this.links.getLink(rel);
    }
  };
  
};