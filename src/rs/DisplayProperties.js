module.exports = function(GedcomX){
  
  var utils = require('../utils'),
      Base = require('../Base');
  
  /**
   * A set of properties for convenience in displaying a summary of a person to a user. 
   * 
   * @see {@link https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/rs-specification.md#display-properties-data-type|GEDCOM X RS Spec}
   * 
   * @class DisplayProperties
   * @extends Base
   * @param {Object} [json]
   */
  var DisplayProperties = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof DisplayProperties)){
      return new DisplayProperties(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(DisplayProperties.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  DisplayProperties.prototype = Object.create(Base.prototype);
  
  DisplayProperties._gedxClass = DisplayProperties.prototype._gedxClass = 'GedcomX.DisplayProperties';
  
  DisplayProperties.jsonProps = [
    'name',
    'gender',
    'lifespan',
    'birthDate',
    'birthPlace',
    'deathDate',
    'deathPlace',
    'marriageDate',
    'marriagePlace',
    'ascendancyNumber',
    'descendancyNumber',
    'familiesAsParent',
    'familiesAsChild'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  DisplayProperties.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {DisplayProperties} this
   */
  DisplayProperties.prototype.init = function(json){
    
    Base.prototype.init.call(this, json);
    
    if(json){
      this.setName(json.name);
      this.setGender(json.gender);
      this.setLifespan(json.lifespan);
      this.setBirthDate(json.birthDate);
      this.setBirthPlace(json.birthPlace);
      this.setDeathDate(json.deathDate);
      this.setDeathPlace(json.deathPlace);
      this.setMarriageDate(json.marriageDate);
      this.setMarriagePlace(json.marriagePlace);
      this.setAscendancyNumber(json.ascendancyNumber);
      this.setDescendancyNumber(json.descendancyNumber);
      this.setFamiliesAsParent(json.familiesAsParent);
      this.setFamiliesAsChild(json.familiesAsChild);
    }
    return this;
  };
  
  /**
   * Set the name
   * 
   * @param {String} name
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setName = function(name){
    this.name = name;
    return this;
  };
  
  /**
   * Get the name
   * 
   * @return {String} name
   */
  DisplayProperties.prototype.getName = function(){
    return this.name;
  };
  
  /**
   * Set the gender
   * 
   * @param {String} gender
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setGender = function(gender){
    this.gender = gender;
    return this;
  };
  
  /**
   * Get the gender
   * 
   * @return {String} gender
   */
  DisplayProperties.prototype.getGender = function(){
    return this.gender;
  };
  
  /**
   * Set the lifespan
   * 
   * @param {String} lifespan
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setLifespan = function(lifespan){
    this.lifespan = lifespan;
    return this;
  };
  
  /**
   * Get the lifespan
   * 
   * @return {String} lifespan
   */
  DisplayProperties.prototype.getLifespan = function(){
    return this.lifespan;
  };
  
  /**
   * Set the birth date
   * 
   * @param {String} birthDate
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setBirthDate = function(birthDate){
    this.birthDate = birthDate;
    return this;
  };
  
  /**
   * Get the birth date
   * 
   * @return {String} birthDate
   */
  DisplayProperties.prototype.getBirthDate = function(){
    return this.birthDate;
  };
  
  /**
   * Set the birth place
   * 
   * @param {String} birthPlace
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setBirthPlace = function(birthPlace){
    this.birthPlace = birthPlace;
    return this;
  };
  
  /**
   * Get the birth place
   * 
   * @return {String} birthPlace
   */
  DisplayProperties.prototype.getBirthPlace = function(){
    return this.birthPlace;
  };
  
  /**
   * Set the death date
   * 
   * @param {String} deathDate
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setDeathDate = function(deathDate){
    this.deathDate = deathDate;
    return this;
  };
  
  /**
   * Get the death date
   * 
   * @return {String} deathDate
   */
  DisplayProperties.prototype.getDeathDate = function(){
    return this.deathDate;
  };
  
  /**
   * Set the death place
   * 
   * @param {String} deathPlace
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setDeathPlace = function(deathPlace){
    this.deathPlace = deathPlace;
    return this;
  };
  
  /**
   * Get the death place
   * 
   * @return {String} deathPlace
   */
  DisplayProperties.prototype.getDeathPlace = function(){
    return this.deathPlace;
  };
  
  /**
   * Set the marriage date
   * 
   * @param {String} marriageDate
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setMarriageDate = function(marriageDate){
    this.marriageDate = marriageDate;
    return this;
  };
  
  /**
   * Get the marriage date
   * 
   * @return {String} marriageDate
   */
  DisplayProperties.prototype.getMarriageDate = function(){
    return this.marriageDate;
  };
  
  /**
   * Set the marriage place
   * 
   * @param {String} marriagePlace
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setMarriagePlace = function(marriagePlace){
    this.marriagePlace = marriagePlace;
    return this;
  };
  
  /**
   * Get the marriage place
   * 
   * @return {String} marriagePlace
   */
  DisplayProperties.prototype.getMarriagePlace = function(){
    return this.marriagePlace;
  };
  
  /**
   * Set the ascendancy number
   * 
   * @param {String} ascendancyNumber
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setAscendancyNumber = function(ascendancyNumber){
    this.ascendancyNumber = ascendancyNumber;
    return this;
  };
  
  /**
   * Get the ascendancy number
   * 
   * @return {String} ascendancyNumber
   */
  DisplayProperties.prototype.getAscendancyNumber = function(){
    return this.ascendancyNumber;
  };
  
  /**
   * Set the descendancy number
   * 
   * @param {String} descendancyNumber
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setDescendancyNumber = function(descendancyNumber){
    this.descendancyNumber = descendancyNumber;
    return this;
  };
  
  /**
   * Get the descendancy number
   * 
   * @return {String} descendancyNumber
   */
  DisplayProperties.prototype.getDescendancyNumber = function(){
    return this.descendancyNumber;
  };
  
  /**
   * Set families as parent
   * 
   * @param {FamilyView[]} families
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setFamiliesAsParent = function(families){
    return this._setArray(families, 'familiesAsParent', 'addFamilyAsParent');
  };
  
  /**
   * Add a family as parent
   * 
   * @param {FamilyView} family
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.addFamilyAsParent = function(family){
    return this._arrayPush(family, 'familiesAsParent', GedcomX.FamilyView);
  };
  
  /**
   * Get families as parent
   * 
   * @return {FamilyView[]} families
   */
  DisplayProperties.prototype.getFamiliesAsParent = function(){
    return this.familiesAsParent || [];
  };
  
  /**
   * Set families as child
   * 
   * @param {FamilyView[]} families
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.setFamiliesAsChild = function(families){
    return this._setArray(families, 'familiesAsChild', 'addFamilyAsChild');
  };
  
  /**
   * Add a family as child
   * 
   * @param {FamilyView} family
   * @return {DisplayProperties} this instance
   */
  DisplayProperties.prototype.addFamilyAsChild = function(family){
    return this._arrayPush(family, 'familiesAsChild', GedcomX.FamilyView);
  };
  
  /**
   * Get families as child
   * 
   * @return {FamilyView[]} families
   */
  DisplayProperties.prototype.getFamiliesAsChild = function(){
    return this.familiesAsChild || [];
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  DisplayProperties.prototype.toJSON = function(){
    return this._toJSON(Base, DisplayProperties.jsonProps);
  };
  
  GedcomX.DisplayProperties = DisplayProperties;
  
};