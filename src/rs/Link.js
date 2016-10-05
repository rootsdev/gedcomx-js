module.exports = function(GedcomX){

  var utils = require('../utils'),
      Base = require('../Base');
  
  /**
   * A representation of an available transition from one application state to another.
   * 
   * @constructor
   * @param {Object} [json]
   */
  var Link = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Link)){
      return new Link(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Link.isInstance(json)){
      return json;
    }
    
    // TODO: Enforce spec constraint that requires either an href or a template?
    
    this.init(json);
  };
  
  Link.prototype = Object.create(Base.prototype);
  
  Link._gedxClass = Link.prototype._gedxClass = 'GedcomX.Link';
  
  Link.jsonProps = [
    'rel',
    'href',
    'template',
    'type',
    'accept',
    'allow',
    'hreflang',
    'title'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  Link.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {Link} this
   */
  Link.prototype.init = function(json){
    
    Base.prototype.init.call(this, json);
    
    if(json){
      this.setRel(json.rel);
      this.setHref(json.href);
      this.setTemplate(json.template);
      this.setType(json.type);
      this.setAccept(json.accept);
      this.setAllow(json.allow);
      this.setHrefLang(json.hreflang);
      this.setTitle(json.title);
    }
    return this;
  };
  
  /**
   * Get the Link's rel
   * 
   * @returns {String} rel
   */
  Link.prototype.getRel = function(){
    return this.rel;
  };
  
  /**
   * Set the Link's rel
   * 
   * @param {String} rel
   * @returns {Object} this
   */
  Link.prototype.setRel = function(rel){
    if(rel){
      this.rel = rel;
    }
    return this;
  };
  
  /**
   * Get the Link's href
   * 
   * @returns {String} href
   */
  Link.prototype.getHref = function(){
    return this.href;
  };
  
  /**
   * Set the Link's href
   * 
   * @param {String} href
   * @returns {Object} this
   */
  Link.prototype.setHref = function(href){
    if(href){
      this.href = href;
    }
    return this;
  };
  
  /**
   * Get the Link's template
   * 
   * @returns {String} template
   */
  Link.prototype.getTemplate = function(){
    return this.template;
  };
  
  /**
   * Set the Link's template
   * 
   * @param {String} template
   * @returns {Object} this
   */
  Link.prototype.setTemplate = function(template){
    if(template){
      this.template = template;
    }
    return this;
  };
  
  /**
   * Get the Link's type
   * 
   * @returns {String} type
   */
  Link.prototype.getType = function(){
    return this.type;
  };
  
  /**
   * Set the Link's type
   * 
   * @param {String} type
   * @returns {Object} this
   */
  Link.prototype.setType = function(type){
    if(type){
      this.type = type;
    }
    return this;
  };
  
  /**
   * Get the Link's accept
   * 
   * @returns {String} accept
   */
  Link.prototype.getAccept = function(){
    return this.accept;
  };
  
  /**
   * Set the Link's accept
   * 
   * @param {String} accept
   * @returns {Object} this
   */
  Link.prototype.setAccept = function(accept){
    if(accept){
      this.accept = accept;
    }
    return this;
  };
  
  /**
   * Get the Link's allow
   * 
   * @returns {String} allow
   */
  Link.prototype.getAllow = function(){
    return this.allow;
  };
  
  /**
   * Set the Link's allow
   * 
   * @param {String} allow
   * @returns {Object} this
   */
  Link.prototype.setAllow = function(allow){
    if(allow){
      this.allow = allow;
    }
    return this;
  };
  
  /**
   * Get the Link's hreflang
   * 
   * @returns {String} hreflang
   */
  Link.prototype.getHrefLang = function(){
    return this.hreflang;
  };
  
  /**
   * Set the Link's hreflang
   * 
   * @param {String} hreflang
   * @returns {Object} this
   */
  Link.prototype.setHrefLang = function(hreflang){
    if(hreflang){
      this.hreflang = hreflang;
    }
    return this;
  };
  
  /**
   * Get the Link's title
   * 
   * @returns {String} title
   */
  Link.prototype.getTitle = function(){
    return this.title;
  };
  
  /**
   * Set the Link's title
   * 
   * @param {String} title
   * @returns {Object} this
   */
  Link.prototype.setTitle = function(title){
    if(title){
      this.title = title;
    }
    return this;
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  Link.prototype.toJSON = function(){
    return this._toJSON(Base, Link.jsonProps);
  };
  
  GedcomX.Link = Link;

};