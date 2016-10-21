module.exports = function(GedcomX){
  
  var utils = require('../utils'),
      Base = require('../Base');
  
  /**
   * A set of properties for convenience in displaying a summary of a place. 
   * 
   * @see {@link https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/rs-specification.md#place-display-properties-data-type|GEDCOM X RS Spec}
   * 
   * @class PlaceDisplayProperties
   * @extends Base
   * @param {Object} [json]
   */
  var PlaceDisplayProperties = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof PlaceDisplayProperties)){
      return new PlaceDisplayProperties(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(PlaceDisplayProperties.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  PlaceDisplayProperties.prototype = Object.create(Base.prototype);
  
  PlaceDisplayProperties._gedxClass = PlaceDisplayProperties.prototype._gedxClass = 'GedcomX.PlaceDisplayProperties';
  
  PlaceDisplayProperties.jsonProps = [
    'name',
    'fullName',
    'type'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  PlaceDisplayProperties.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {PlaceDisplayProperties} this
   */
  PlaceDisplayProperties.prototype.init = function(json){
    
    Base.prototype.init.call(this, json);
    
    if(json){
      this.setName(json.name);
      this.setFullName(json.fullName);
      this.setType(json.type);
    }
    return this;
  };
  
  /**
   * Set the name
   * 
   * @param {String} name
   * @return {PlaceDisplayProperties} this
   */
  PlaceDisplayProperties.prototype.setName = function(name){
    this.name = name;
    return this;
  };
  
  /**
   * Get the name
   * 
   * @return {String} name
   */
  PlaceDisplayProperties.prototype.getName = function(){
    return this.name;
  };
  
  /**
   * Set the full name
   * 
   * @param {String} fullName
   * @return {PlaceDisplayProperties} this
   */
  PlaceDisplayProperties.prototype.setFullName = function(fullName){
    this.fullName = fullName;
    return this;
  };
  
  /**
   * Get the full nname
   * 
   * @return {String} fullName
   */
  PlaceDisplayProperties.prototype.getFullName = function(){
    return this.fullName;
  };
  
  /**
   * Set the type
   * 
   * @param {String} type
   * @return {PlaceDisplayProperties} this
   */
  PlaceDisplayProperties.prototype.setType = function(type){
    this.type = type;
    return this;
  };
  
  /**
   * Get the type
   * 
   * @return {String} type
   */
  PlaceDisplayProperties.prototype.getType = function(){
    return this.type;
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  PlaceDisplayProperties.prototype.toJSON = function(){
    return this._toJSON(Base, PlaceDisplayProperties.jsonProps);
  };
  
  GedcomX.PlaceDisplayProperties = PlaceDisplayProperties;
  
};