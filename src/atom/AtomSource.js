module.exports = function(GedcomX){

  var utils = require('../utils'),
      AtomCommon = require('./AtomCommon');
  
  /**
   * Information about the originating feed if an entry is copied or aggregated
   * from another feed.
   * 
   * @constructor
   * @param {Object} [json]
   */
  var AtomSource = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof AtomSource)){
      return new AtomSource(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(AtomSource.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  AtomSource.prototype = Object.create(AtomCommon.prototype);
  
  AtomSource._gedxClass = AtomSource.prototype._gedxClass = 'GedcomX.AtomSource';
  
  AtomSource.jsonProps = [
    'authors',
    'contributors',
    'categories',
    'generator',
    'icon',
    'id',
    'links',
    'logo',
    'rights',
    'subtitle',
    'title',
    'updated'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  AtomSource.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {AtomSource} this
   */
  AtomSource.prototype.init = function(json){
    
    AtomCommon.prototype.init.call(this, json);
    
    if(json){
      this.setAuthors(json.authors);
      this.setContributors(json.contributors);
      this.setCategories(json.categories);
      this.setGenerator(json.generator);
      this.setIcon(json.icon);
      this.setId(json.id);
      this.setLinks(json.links);
      this.setLogo(json.logo);
      this.setRights(json.rights);
      this.setSubtitle(json.subtitle);
      this.setTitle(json.title);
      this.setUpdated(json.updated);
    }
    return this;
  };
  
  /**
   * Set the authors
   * 
   * @param {AtomPerson[]} authors
   * @return {AtomSource} this
   */
  AtomSource.prototype.setAuthors = function(authors){
    return this._setArray(authors, 'authors', 'addAuthor');
  };
  
  /**
   * Add an author
   * 
   * @param {AtomPerson} author
   * @return {AtomSource} this
   */
  AtomSource.prototype.addAuthor = function(author){
    return this._arrayPush(author, 'authors', GedcomX.AtomPerson);
  };
  
  /**
   * Get the authors
   * 
   * @return {AtomPerson[]} authors
   */
  AtomSource.prototype.getAuthors = function(){
    return this.authors || [];
  };
  
  /**
   * Set the contributors
   * 
   * @param {AtomPerson[]} contributors
   * @return {AtomSource} this
   */
  AtomSource.prototype.setContributors = function(contributors){
    return this._setArray(contributors, 'contributors', 'addContributor');
  };
  
  /**
   * Add a contributor
   * 
   * @param {AtomPerson} contributor
   * @return {AtomSource} this
   */
  AtomSource.prototype.addContributor = function(contributor){
    return this._arrayPush(contributor, 'contributors', GedcomX.AtomPerson);
  };
  
  /**
   * Get the contributors
   * 
   * @return {AtomPerson[]} contributors
   */
  AtomSource.prototype.getContributors = function(){
    return this.contributors || [];
  };
  
  /**
   * Set the categories
   * 
   * @param {AtomCategory[]} categories
   * @return {AtomSource} this
   */
  AtomSource.prototype.setCategories = function(categories){
    return this._setArray(categories, 'categories', 'addCategory');
  };
  
  /**
   * Add a category
   * 
   * @param {AtomCategory} category
   * @return {AtomSource} this
   */
  AtomSource.prototype.addCategory = function(category){
    return this._arrayPush(category, 'categories', GedcomX.AtomCategory);
  };
  
  /**
   * Get the categories
   * 
   * @return {AtomCategory[]} categories
   */
  AtomSource.prototype.getCategories = function(){
    return this.categories || [];
  };
  
  /**
   * Set the generator
   * 
   * @param {AtomGenerator} generator
   * @return {AtomSource}
   */
  AtomSource.prototype.setGenerator = function(generator){
    if(generator){
      this.generator = GedcomX.AtomGenerator(generator);
    }
    return this;
  };
  
  /**
   * Get the generator
   * 
   * @return {AtomGenerator} generator
   */
  AtomSource.prototype.getGenerator = function(){
    return this.generator;
  };
  
  /**
   * Set the icon
   * 
   * @param {String} icon
   * @return {AtomSource}
   */
  AtomSource.prototype.setIcon = function(icon){
    this.icon = icon;
    return this;
  };
  
  /**
   * Get the icon
   * 
   * @return {String} icon
   */
  AtomSource.prototype.getIcon = function(){
    return this.icon;
  };
  
  /**
   * Set the id
   * 
   * @param {String} id
   * @return {AtomSource}
   */
  AtomSource.prototype.setId = function(id){
    this.id = id;
    return this;
  };
  
  /**
   * Get the id
   * 
   * @return {String} id
   */
  AtomSource.prototype.getId = function(){
    return this.id;
  };
  
  /**
   * Set the links
   * 
   * @param {Links} links
   * @return {AtomSource} this
   */
  AtomSource.prototype.setLinks = function(links){
    if(links){
      this.links = GedcomX.Links(links);
    }
    return this;
  };
  
  /**
   * Add a link
   * 
   * @param {Link} link
   * @return {AtomSource} this
   */
  AtomSource.prototype.addLink = function(link){
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
  AtomSource.prototype.getLinks = function(){
    return this.links ? this.links.getLinks() : [];
  };
  
  /**
   * Get a link
   * 
   * @param {String} rel
   * @return {Links}
   */
  AtomSource.prototype.getLink = function(rel){
    if(this.links){
      return this.links.getLink(rel);
    }
  };
  
  /**
   * Set the logo
   * 
   * @param {String} logo
   * @return {AtomSource}
   */
  AtomSource.prototype.setLogo = function(logo){
    this.logo = logo;
    return this;
  };
  
  /**
   * Get the logo
   * 
   * @return {String} logo
   */
  AtomSource.prototype.getLogo = function(){
    return this.logo;
  };
  
  /**
   * Set the rights
   * 
   * @param {String} rights
   * @return {AtomSource}
   */
  AtomSource.prototype.setRights = function(rights){
    this.rights = rights;
    return this;
  };
  
  /**
   * Get the rights
   * 
   * @return {String} rights
   */
  AtomSource.prototype.getRights = function(){
    return this.rights;
  };
  
  /**
   * Set the subtitle
   * 
   * @param {String} subtitle
   * @return {AtomSource}
   */
  AtomSource.prototype.setSubtitle = function(subtitle){
    this.subtitle = subtitle;
    return this;
  };
  
  /**
   * Get the subtitle
   * 
   * @return {String} subtitle
   */
  AtomSource.prototype.getSubtitle = function(){
    return this.subtitle;
  };
  
  /**
   * Set the title
   * 
   * @param {String} title
   * @return {AtomSource}
   */
  AtomSource.prototype.setTitle = function(title){
    this.title = title;
    return this;
  };
  
  /**
   * Get the title
   * 
   * @return {String} title
   */
  AtomSource.prototype.getTitle = function(){
    return this.title;
  };

  /**
   * Get the updated timestamp
   * 
   * @returns {Date} updated
   */
  AtomSource.prototype.getUpdated = function(){
    return this.updated;
  };
  
  /**
   * Set the updated timestamp
   * 
   * @param {Date|Number} date Integer timestamp (milliseconds since epoch) or JavaScript Date instance
   * @returns {AtomSource} This instance
   */
  AtomSource.prototype.setUpdated = function(date){
    if(date){
      this.updated = new Date(date);
    }
    return this;
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  AtomSource.prototype.toJSON = function(){
    return this._toJSON(AtomCommon, AtomSource.jsonProps);
  };
  
  GedcomX.AtomSource = AtomSource;

};