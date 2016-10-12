module.exports = function(GedcomX){

  var utils = require('../utils'),
      AtomCommon = require('./AtomCommon');
  
  /**
   * Information about a category associated with an atom entry or feed.
   * 
   * @constructor
   * @param {Object} [json]
   */
  var AtomCategory = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof AtomCategory)){
      return new AtomCategory(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(AtomCategory.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  AtomCategory.prototype = Object.create(AtomCommon.prototype);
  
  AtomCategory._gedxClass = AtomCategory.prototype._gedxClass = 'GedcomX.AtomCategory';
  
  AtomCategory.jsonProps = [
    'scheme',
    'term',
    'label'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  AtomCategory.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {AtomCategory} this
   */
  AtomCategory.prototype.init = function(json){
    
    AtomCommon.prototype.init.call(this, json);
    
    if(json){
      this.setScheme(json.scheme);
      this.setTerm(json.term);
      this.setLabel(json.label);
    }
    return this;
  };
  
  /**
   * Set the scheme
   * 
   * @param {String} scheme
   * @return {AtomCategory} this
   */
  AtomCategory.prototype.setScheme = function(scheme){
    this.scheme = scheme;
    return this;
  };
  
  /**
   * Get the scheme
   * 
   * @return {AtomCategory} this
   */
  AtomCategory.prototype.getScheme = function(){
    return this.scheme;
  };
  
  /**
   * Set the term
   * 
   * @param {String} term
   * @return {AtomCategory} this
   */
  AtomCategory.prototype.setTerm = function(term){
    this.term = term;
    return this;
  };
  
  /**
   * Get the term
   * 
   * @return {AtomCategory} this
   */
  AtomCategory.prototype.getTerm = function(){
    return this.term;
  };
  
  /**
   * Set the label
   * 
   * @param {String} label
   * @return {AtomCategory} this
   */
  AtomCategory.prototype.setLabel = function(label){
    this.label = label;
    return this;
  };
  
  /**
   * Get the label
   * 
   * @return {AtomCategory} this
   */
  AtomCategory.prototype.getLabel = function(){
    return this.label;
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  AtomCategory.prototype.toJSON = function(){
    return this._toJSON(AtomCommon, AtomCategory.jsonProps);
  };
  
  GedcomX.AtomCategory = AtomCategory;

};