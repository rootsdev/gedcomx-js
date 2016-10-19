module.exports = function(GedcomX){
  
  var AtomCommon = require('./AtomCommon');
  
  /**
   * The Atom data formats provide a format for web content and metadata syndication.
   * The JSON data format is specific to GEDCOM X and is a translation to JSON from the XML.
   * 
   * @see {@link https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/atom-model-specification.md#atom-json-media-type|GEDCOM X Atom JSON Spec}
   * @see {@link https://tools.ietf.org/html/rfc4287#section-4.1.1|RFC 4287}
   * 
   * @class AtomFeed
   * @extends AtomCommon
   * @param {Object} [json]
   */ 
  var AtomFeed = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof AtomFeed)){
      return new AtomFeed(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(AtomFeed.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  AtomFeed.prototype = Object.create(AtomCommon.prototype);

  AtomFeed._gedxClass = AtomFeed.prototype._gedxClass = 'GedcomX.AtomFeed';
  
  AtomFeed.jsonProps = [
    'authors', 
    'contributors', 
    'categories', 
    'generator', 
    'icon', 
    'id', 
    'results', 
    'index', 
    'links', 
    'logo', 
    'rights', 
    'subtitle', 
    'title', 
    'updated', 
    'entries', 
    'facets', 
    'searchInfo' 
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  AtomFeed.isInstance = function(obj){
    return GedcomX.utils.isInstance(obj, this._gedxClass);
  };
  
  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return AtomFeed this
   */
  AtomFeed.prototype.init = function(json){
    
    AtomCommon.prototype.init.call(this, json);
    
    if(json){
      this.setAuthors(json.authors); 
      this.setContributors(json.contributors); 
      this.setCategories(json.categories); 
      this.setGenerator(json.generator); 
      this.setIcon(json.icon); 
      this.setId(json.id); 
      this.setResults(json.results); 
      this.setIndex(json.index); 
      this.setLinks(json.links); 
      this.setLogo(json.logo); 
      this.setRights(json.rights); 
      this.setSubtitle(json.subtitle); 
      this.setTitle(json.title); 
      this.setUpdated(json.updated); 
      this.setEntries(json.entries); 
      this.setFacets(json.facets); 
      this.setSearchInfo(json.searchInfo); 
    }
    return this;
  };
  
  /**
   * Get the authors
   * 
   * @return {AtomPerson[]}
   */
  AtomFeed.prototype.getAuthors = function(){
    return this.authors || [];
  };
  
  /**
   * Set the authors
   * 
   * @param {AtomPerson[]} authors
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setAuthors = function(authors){
    return this._setArray(authors, 'authors', 'addAuthor');
  };
  
  /**
   * Add a author
   * 
   * @param {AtomPerson} author
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.addAuthor = function(author){
    return this._arrayPush(author, 'authors', GedcomX.AtomPerson);
  };    
  
  /**
   * Get the contributors
   * 
   * @return {AtomPerson[]}
   */
  AtomFeed.prototype.getContributors = function(){
    return this.contributors || [];
  };
  
  /**
   * Set the contributors
   * 
   * @param {AtomPerson[]} contributors
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setContributors = function(contributors){
    return this._setArray(contributors, 'contributors', 'addContributor');
  };
  
  /**
   * Add a contributor
   * 
   * @param {AtomPerson} contributor
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.addContributor = function(contributor){
    return this._arrayPush(contributor, 'contributors', GedcomX.AtomPerson);
  };    
  
  /**
   * Get the categories
   * 
   * @return {AtomCategory[]}
   */
  AtomFeed.prototype.getCategories = function(){
    return this.categories || [];
  };
  
  /**
   * Set the categories
   * 
   * @param {AtomCategory[]} categories
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setCategories = function(categories){
    return this._setArray(categories, 'categories', 'addCategorie');
  };
  
  /**
   * Add a categorie
   * 
   * @param {AtomCategory} categorie
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.addCategorie = function(categorie){
    return this._arrayPush(categorie, 'categories', GedcomX.AtomCategory);
  };    
  
  /**
   * Get the generator
   * 
   * @returns {AtomGenerator} generator
   */
  AtomFeed.prototype.getGenerator = function(){
    return this.generator;
  };
  
  /**
   * Set the generator
   * 
   * @param {AtomGenerator} generator
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setGenerator = function(generator){
    if(generator){
      this.generator = GedcomX.AtomGenerator(generator);
    }
    return this;
  };    
  
  /**
   * Get the icon
   * 
   * @returns {String} icon
   */
  AtomFeed.prototype.getIcon = function(){
    return this.icon;
  };
  
  /**
   * Set the icon
   * 
   * @param {String} icon
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setIcon = function(icon){
    this.icon = icon;
    return this;
  };        
  
  /**
   * Get the id
   * 
   * @returns {String} id
   */
  AtomFeed.prototype.getId = function(){
    return this.id;
  };
  
  /**
   * Set the id
   * 
   * @param {String} id
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setId = function(id){
    this.id = id;
    return this;
  };        
  
  /**
   * Get the results
   * 
   * @returns {Integer} results
   */
  AtomFeed.prototype.getResults = function(){
    return this.results;
  };
  
  /**
   * Set the results
   * 
   * @param {Integer} results
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setResults = function(results){
    this.results = results;
    return this;
  };        
  
  /**
   * Get the index
   * 
   * @returns {Integer} index
   */
  AtomFeed.prototype.getIndex = function(){
    return this.index;
  };
  
  /**
   * Set the index
   * 
   * @param {Integer} index
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setIndex = function(index){
    this.index = index;
    return this;
  };        
  
  /**
   * Set the links
   * 
   * @param {Links} links
   * @return {AtomFeed} this
   */
  AtomFeed.prototype.setLinks = function(links){
    if(links){
      this.links = GedcomX.Links(links);
    }
    return this;
  };
  
  /**
   * Add a link
   * 
   * @param {Link} link
   * @return {AtomFeed} this
   */
  AtomFeed.prototype.addLink = function(link){
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
  AtomFeed.prototype.getLinks = function(){
    return this.links ? this.links.getLinks() : [];
  };
  
  /**
   * Get a link
   * 
   * @param {String} rel
   * @return {Link}
   */
  AtomFeed.prototype.getLink = function(rel){
    if(this.links){
      return this.links.getLink(rel);
    }
  };
  
  /**
   * Get the logo
   * 
   * @returns {String} logo
   */
  AtomFeed.prototype.getLogo = function(){
    return this.logo;
  };
  
  /**
   * Set the logo
   * 
   * @param {String} logo
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setLogo = function(logo){
    this.logo = logo;
    return this;
  };        
  
  /**
   * Get the rights
   * 
   * @returns {String} rights
   */
  AtomFeed.prototype.getRights = function(){
    return this.rights;
  };
  
  /**
   * Set the rights
   * 
   * @param {String} rights
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setRights = function(rights){
    this.rights = rights;
    return this;
  };        
  
  /**
   * Get the subtitle
   * 
   * @returns {String} subtitle
   */
  AtomFeed.prototype.getSubtitle = function(){
    return this.subtitle;
  };
  
  /**
   * Set the subtitle
   * 
   * @param {String} subtitle
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setSubtitle = function(subtitle){
    this.subtitle = subtitle;
    return this;
  };        
  
  /**
   * Get the title
   * 
   * @returns {String} title
   */
  AtomFeed.prototype.getTitle = function(){
    return this.title;
  };
  
  /**
   * Set the title
   * 
   * @param {String} title
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setTitle = function(title){
    this.title = title;
    return this;
  };        
  
  /**
   * Get the updated
   * 
   * @returns {Date} updated
   */
  AtomFeed.prototype.getUpdated = function(){
    return this.updated;
  };
  
  /**
   * Set the updated
   * 
   * @param {Date|Integer} updated
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setUpdated = function(updated){
    if(updated){
      this.updated = new Date(updated);
    }
    return this;
  };        
  
  /**
   * Get the entries
   * 
   * @return {AtomEntry[]}
   */
  AtomFeed.prototype.getEntries = function(){
    return this.entries || [];
  };
  
  /**
   * Set the entries
   * 
   * @param {AtomEntry[]} entries
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setEntries = function(entries){
    return this._setArray(entries, 'entries', 'addEntry');
  };
  
  /**
   * Add an entry
   * 
   * @param {AtomEntry} entry
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.addEntry = function(entry){
    return this._arrayPush(entry, 'entries', GedcomX.AtomEntry);
  };    
  
  /**
   * Get the facets
   * 
   * @return {Field[]}
   */
  AtomFeed.prototype.getFacets = function(){
    return this.facets || [];
  };
  
  /**
   * Set the facets
   * 
   * @param {Field[]} facets
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setFacets = function(facets){
    return this._setArray(facets, 'facets', 'addFacet');
  };
  
  /**
   * Add a facet
   * 
   * @param {Field} facet
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.addFacet = function(facet){
    return this._arrayPush(facet, 'facets', GedcomX.Field);
  };    
  
  /**
   * Get the searchInfo
   * 
   * @return {SearchInfo[]}
   */
  AtomFeed.prototype.getSearchInfo = function(){
    return this.searchInfo || [];
  };
  
  /**
   * Set the searchInfo
   * 
   * @param {SearchInfo[]} searchInfo
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.setSearchInfo = function(searchInfo){
    return this._setArray(searchInfo, 'searchInfo', 'addSearchInfo');
  };
  
  /**
   * Add a searchInfo
   * 
   * @param {SearchInfo} searchInfo
   * @returns {AtomFeed} this
   */
  AtomFeed.prototype.addSearchInfo = function(searchInfo){
    return this._arrayPush(searchInfo, 'searchInfo', GedcomX.SearchInfo);
  };    
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  AtomFeed.prototype.toJSON = function(){
    return this._toJSON(AtomCommon, AtomFeed.jsonProps);
  };
  
  GedcomX.AtomFeed = AtomFeed;
  
};