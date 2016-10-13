module.exports = function(GedcomX){

  var utils = require('../utils'),
      Base = require('../Base');
  
  /**
   * A list of Links
   * 
   * @class
   * @extends Base
   * @param {Object} [json]
   */
  var Links = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Links)){
      return new Links(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Links.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  // There's no value in us extending Base at the moment
  Links.prototype = Object.create(Base.prototype);
  
  Links._gedxClass = Links.prototype._gedxClass = 'GedcomX.Links';
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  Links.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {Link} this
   */
  Links.prototype.init = function(json){
    
    Base.prototype.init.call(this, json);
    
    this.links = [];
    
    if(json){
      this.setLinks(json);
    }
    return this;
  };
  
  /**
   * Get the list of links
   * 
   * @return {Link[]} links
   */
  Links.prototype.getLinks = function(){
    return this.links;
  };
  
  /**
   * Get a link matching a rel
   * 
   * @param {String} rel
   * @return {Link} link
   */
  Links.prototype.getLink = function(rel){
    return this.links.find(function(link){
      return link.getRel() === rel;
    });
  };
  
  /**
   * Add a link
   * 
   * @param {Link} link
   * @return {Links} this
   */
  Links.prototype.addLink = function(link){
    // TODO: check for duplicates
    this.links.push(GedcomX.Link(link));
    return this;
  };
  
  /**
   * Set the links. May either provide the JSON object structure or an array
   * of Link instances
   * 
   * @param {Object|Link[]} links
   * @return {Links} this
   */
  Links.prototype.setLinks = function(links){
    this.links = [];
    if(links){
      
      // List of link
      if(Array.isArray(links)){
        for(var i = 0; i < links.length; i++){
          this.addLink(links[i]);
        }
      }
      
      // JSON object
      else {
        for(var rel in links){
          this.addLink(new GedcomX.Link(links[rel]).setRel(rel));
        }
      }
    }
    return this;
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  Links.prototype.toJSON = function(){
    var links = this.getLinks(),
        json = {},
        linkJson, rel;
    for(var i = 0; i < links.length; i++){
      linkJson = utils.toJSON(links[i]);
      rel = linkJson.rel;
      if(rel){
        delete linkJson.rel;
        json[rel] = linkJson;
      }
    }
    return json;
  };
  
  GedcomX.Links = Links;

};