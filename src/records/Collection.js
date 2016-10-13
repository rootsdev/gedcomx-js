module.exports = function(GedcomX){
  
  var utils = require('../utils');
  
  /**
   * A collection of genealogical data.
   * 
   * @see {@link https://github.com/FamilySearch/gedcomx-record/blob/master/specifications/record-specification.md#collection|GEDCOM X Records Spec}
   * 
   * @class
   * @extends ExtensibleData
   * @param {Object} [json]
   */
  var Collection = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof Collection)){
      return new Collection(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(Collection.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  Collection.prototype = Object.create(GedcomX.ExtensibleData.prototype);
  
  Collection._gedxClass = Collection.prototype._gedxClass = 'GedcomX.Collection';
  
  Collection.jsonProps = [
    'lang',
    'content',
    'title',
    'size',
    'attribution'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  Collection.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {Collection} this
   */
  Collection.prototype.init = function(json){
    
    GedcomX.ExtensibleData.prototype.init.call(this, json);
    
    if(json){
      this.setLang(json.lang);
      this.setContent(json.content);
      this.setTitle(json.title);
      this.setSize(json.size);
      this.setAttribution(json.attribution);
    }
    return this;
  };
  
  /**
   * Set the lang
   * 
   * @param {String} lang
   * @return {Collection} this
   */
  Collection.prototype.setLang = function(lang){
    this.lang = lang;
    return this;
  };
  
  /**
   * Get lang
   * 
   * @return {String} lang
   */
  Collection.prototype.getLang = function(){
    return this.lang;
  };
  
  /**
   * Set the content
   * 
   * @param {CollectionContent[]} content
   * @return {Collection} this
   */
  Collection.prototype.setContent = function(content){
    return this._setArray(content, 'content', 'addContent');
  };
  
  /**
   * Add a collection content
   * 
   * @param {CollectionContent} content
   * @return {Collection} this
   */
  Collection.prototype.addContent = function(content){
    return this._arrayPush(content, 'content', GedcomX.CollectionContent);
  };
  
  /**
   * Get content
   * 
   * @return {CollectionContent[]}
   */
  Collection.prototype.getContent = function(){
    return this.content || [];
  };
  
  /**
   * Set the title
   * 
   * @param {String} title
   * @return {Collection} this
   */
  Collection.prototype.setTitle = function(title){
    this.title = title;
    return this;
  };
  
  /**
   * Get the title
   * 
   * @return {String} title
   */
  Collection.prototype.getTitle = function(){
    return this.title;
  };
  
  /**
   * Set the size
   * 
   * @param {Number} size
   * @return {Collection} this
   */
  Collection.prototype.setSize = function(size){
    this.size = size;
    return this;
  };
  
  /**
   * Get the size
   * 
   * @return {Number}
   */
  Collection.prototype.getSize = function(){
    return this.size;
  };
  
  /**
   * Set the attribution
   * 
   * @param {Attribution}
   * @return {Collection} this
   */
  Collection.prototype.setAttribution = function(attribution){
    if(attribution){
      this.attribution = GedcomX.Attribution(attribution);
    }
    return this;
  };
  
  /**
   * Get the attribution
   * 
   * @return {Attribution}
   */
  Collection.prototype.getAttribution = function(){
    return this.attribution;
  };
   
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  Collection.prototype.toJSON = function(){
    return this._toJSON(GedcomX.ExtensibleData, Collection.jsonProps);
  };
  
  GedcomX.Collection = Collection;
  
};