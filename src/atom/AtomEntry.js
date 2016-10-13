module.exports = function(GedcomX){

  var utils = require('../utils'),
      AtomCommon = require('./AtomCommon');
  
  /**
   * An individual atom feed entry.
   * 
   * @see {@link https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/atom-model-specification.md#atom-json-media-type|GEDCOM X Atom JSON Spec}
   * @see {@link https://tools.ietf.org/html/rfc4287#section-4.1.2|RFC 4287}
   * 
   * @class
   * @extends AtomCommon
   * @param {Object} [json]
   */
  var AtomEntry = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof AtomEntry)){
      return new AtomEntry(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(AtomEntry.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  AtomEntry.prototype = Object.create(AtomCommon.prototype);
  
  AtomEntry._gedxClass = AtomEntry.prototype._gedxClass = 'GedcomX.AtomEntry';
  
  AtomEntry.jsonProps = [
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
    'updated',
    'content',
    'confidence',
    'published',
    'source',
    'summary',
    'score'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  AtomEntry.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.init = function(json){
    
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
      this.setContent(json.content);
      this.setConfidence(json.confidence);
      this.setPublished(json.published);
      this.setSource(json.source);
      this.setSummary(json.summary);
      this.setScore(json.score);
    }
    return this;
  };
  
  /**
   * Set the authors
   * 
   * @param {AtomPerson[]} authors
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.setAuthors = function(authors){
    return this._setArray(authors, 'authors', 'addAuthor');
  };
  
  /**
   * Add an author
   * 
   * @param {AtomPerson} author
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.addAuthor = function(author){
    return this._arrayPush(author, 'authors', GedcomX.AtomPerson);
  };
  
  /**
   * Get the authors
   * 
   * @return {AtomPerson[]} authors
   */
  AtomEntry.prototype.getAuthors = function(){
    return this.authors || [];
  };
  
  /**
   * Set the contributors
   * 
   * @param {AtomPerson[]} contributors
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.setContributors = function(contributors){
    return this._setArray(contributors, 'contributors', 'addContributor');
  };
  
  /**
   * Add a contributor
   * 
   * @param {AtomPerson} contributor
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.addContributor = function(contributor){
    return this._arrayPush(contributor, 'contributors', GedcomX.AtomPerson);
  };
  
  /**
   * Get the contributors
   * 
   * @return {AtomPerson[]} contributors
   */
  AtomEntry.prototype.getContributors = function(){
    return this.contributors || [];
  };
  
  /**
   * Set the categories
   * 
   * @param {AtomCategory[]} categories
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.setCategories = function(categories){
    return this._setArray(categories, 'categories', 'addCategory');
  };
  
  /**
   * Add a category
   * 
   * @param {AtomCategory} category
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.addCategory = function(category){
    return this._arrayPush(category, 'categories', GedcomX.AtomCategory);
  };
  
  /**
   * Get the categories
   * 
   * @return {AtomCategory[]} categories
   */
  AtomEntry.prototype.getCategories = function(){
    return this.categories || [];
  };
  
  /**
   * Set the generator
   * 
   * @param {AtomGenerator} generator
   * @return {AtomEntry}
   */
  AtomEntry.prototype.setGenerator = function(generator){
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
  AtomEntry.prototype.getGenerator = function(){
    return this.generator;
  };
  
  /**
   * Set the icon
   * 
   * @param {String} icon
   * @return {AtomEntry}
   */
  AtomEntry.prototype.setIcon = function(icon){
    this.icon = icon;
    return this;
  };
  
  /**
   * Get the icon
   * 
   * @return {String} icon
   */
  AtomEntry.prototype.getIcon = function(){
    return this.icon;
  };
  
  /**
   * Set the id
   * 
   * @param {String} id
   * @return {AtomEntry}
   */
  AtomEntry.prototype.setId = function(id){
    this.id = id;
    return this;
  };
  
  /**
   * Get the id
   * 
   * @return {String} id
   */
  AtomEntry.prototype.getId = function(){
    return this.id;
  };
  
  /**
   * Set the links
   * 
   * @param {Links} links
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.setLinks = function(links){
    if(links){
      this.links = GedcomX.Links(links);
    }
    return this;
  };
  
  /**
   * Add a link
   * 
   * @param {Link} link
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.addLink = function(link){
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
  AtomEntry.prototype.getLinks = function(){
    return this.links ? this.links.getLinks() : [];
  };
  
  /**
   * Get a link
   * 
   * @param {String} rel
   * @return {Links}
   */
  AtomEntry.prototype.getLink = function(rel){
    if(this.links){
      return this.links.getLink(rel);
    }
  };
  
  /**
   * Set the logo
   * 
   * @param {String} logo
   * @return {AtomEntry}
   */
  AtomEntry.prototype.setLogo = function(logo){
    this.logo = logo;
    return this;
  };
  
  /**
   * Get the logo
   * 
   * @return {String} logo
   */
  AtomEntry.prototype.getLogo = function(){
    return this.logo;
  };
  
  /**
   * Set the rights
   * 
   * @param {String} rights
   * @return {AtomEntry}
   */
  AtomEntry.prototype.setRights = function(rights){
    this.rights = rights;
    return this;
  };
  
  /**
   * Get the rights
   * 
   * @return {String} rights
   */
  AtomEntry.prototype.getRights = function(){
    return this.rights;
  };
  
  /**
   * Set the subtitle
   * 
   * @param {String} subtitle
   * @return {AtomEntry}
   */
  AtomEntry.prototype.setSubtitle = function(subtitle){
    this.subtitle = subtitle;
    return this;
  };
  
  /**
   * Get the subtitle
   * 
   * @return {String} subtitle
   */
  AtomEntry.prototype.getSubtitle = function(){
    return this.subtitle;
  };
  
  /**
   * Set the title
   * 
   * @param {String} title
   * @return {AtomEntry}
   */
  AtomEntry.prototype.setTitle = function(title){
    this.title = title;
    return this;
  };
  
  /**
   * Get the title
   * 
   * @return {String} title
   */
  AtomEntry.prototype.getTitle = function(){
    return this.title;
  };

  /**
   * Get the updated timestamp
   * 
   * @returns {Date} updated
   */
  AtomEntry.prototype.getUpdated = function(){
    return this.updated;
  };
  
  /**
   * Set the updated timestamp
   * 
   * @param {Date|Number} date Integer timestamp (milliseconds since epoch) or JavaScript Date instance
   * @returns {AtomEntry} this
   */
  AtomEntry.prototype.setUpdated = function(date){
    if(date){
      this.updated = new Date(date);
    }
    return this;
  };
  
  /**
   * Set the content
   * 
   * @param {AtomContent} content
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.setContent = function(content){
    if(content){
      this.content = GedcomX.AtomContent(content);
    }
    return this;
  };
  
  /**
   * Get the content
   * 
   * @return {AtomContent} content
   */
  AtomEntry.prototype.getContent = function(){
    return this.content;
  };
  
  /**
   * Set the confidence
   * 
   * @param {Integer} confidence
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.setConfidence = function(confidence){
    this.confidence = confidence;
    return this;
  };
  
  /**
   * Get the confidence
   * 
   * @return {Integer} confidence
   */
  AtomEntry.prototype.getConfidence = function(){
    return this.confidence;
  };

  /**
   * Get the published timestamp
   * 
   * @returns {Date} published
   */
  AtomEntry.prototype.getPublished = function(){
    return this.published;
  };
  
  /**
   * Set the published timestamp
   * 
   * @param {Date|Number} date Integer timestamp (milliseconds since epoch) or JavaScript Date instance
   * @returns {AtomEntry} this
   */
  AtomEntry.prototype.setPublished = function(date){
    if(date){
      this.published = new Date(date);
    }
    return this;
  };
  
  /**
   * Set the source
   * 
   * @param {AtomSource} source
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.setSource = function(source){
    if(source){
      this.source = GedcomX.AtomSource(source);
    }
    return this;
  };
  
  /**
   * Get the source
   * 
   * @return {AtomSource} source
   */
  AtomEntry.prototype.getSource = function(){
    return this.source;
  };
  
  /**
   * Set the summary
   * 
   * @param {String} summary
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.setSummary = function(summary){
    this.summary = summary;
    return this;
  };
  
  /**
   * Get the summary
   * 
   * @return {String} summary
   */
  AtomEntry.prototype.getSummary = function(){
    return this.summary;
  };
  
  /**
   * Set the score
   * 
   * @param {Number} score
   * @return {AtomEntry} this
   */
  AtomEntry.prototype.setScore = function(score){
    this.score = score;
    return this;
  };
  
  /**
   * Get the score
   * 
   * @return {Number} score
   */
  AtomEntry.prototype.getScore = function(){
    return this.score;
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  AtomEntry.prototype.toJSON = function(){
    return this._toJSON(AtomCommon, AtomEntry.jsonProps);
  };
  
  GedcomX.AtomEntry = AtomEntry;

};