module.exports = function(GedcomX){
  
  var utils = require('../utils'),
      Base = require('../Base');
  
  /**
   * A view of a family that consists of up to two parents and a list of children
   * who have that set of parents in common. While the Relationship data type 
   * carries the canonical information about the nature of the relationship
   * between the each pair of persons, the FamilyView is designed as a convenience
   * for display purposes.
   * 
   * {@link https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/rs-specification.md#family-view|GEDCOM X RS Spec}
   * 
   * @class FamilyView
   * @extends Base
   * @param {Object} [json]
   */
  var FamilyView = function(json){
    
    // Protect against forgetting the new keyword when calling the constructor
    if(!(this instanceof FamilyView)){
      return new FamilyView(json);
    }
    
    // If the given object is already an instance then just return it. DON'T copy it.
    if(FamilyView.isInstance(json)){
      return json;
    }
    
    this.init(json);
  };
  
  FamilyView.prototype = Object.create(Base.prototype);
  
  FamilyView._gedxClass = FamilyView.prototype._gedxClass = 'GedcomX.FamilyView';
  
  FamilyView.jsonProps = [
    'parent1',
    'parent2',
    'children'
  ];
  
  /**
   * Check whether the given object is an instance of this class.
   * 
   * @param {Object} obj
   * @returns {Boolean}
   */
  FamilyView.isInstance = function(obj){
    return utils.isInstance(obj, this._gedxClass);
  };

  /**
   * Initialize from JSON
   * 
   * @param {Object}
   * @return {FamilyView} this
   */
  FamilyView.prototype.init = function(json){
    
    Base.prototype.init.call(this, json);
    
    if(json){
      this.setParent1(json.parent1);
      this.setParent2(json.parent2);
      this.setChildren(json.children);
    }
    return this;
  };
  
  /**
   * Set parent1
   * 
   * @param {ResourceReference} parent1
   * @return {FamilyView} this
   */
  FamilyView.prototype.setParent1 = function(parent1){
    if(parent1){
      this.parent1 = GedcomX.ResourceReference(parent1);
    }
    return this;
  };
  
  /**
   * Get parent1
   * 
   * @return {ResourceReference}
   */
  FamilyView.prototype.getParent1 = function(){
    return this.parent1;
  };
  
  /**
   * Set parent2
   * 
   * @param {ResourceReference} parent2
   * @return {FamilyView} this
   */
  FamilyView.prototype.setParent2 = function(parent2){
    if(parent2){
      this.parent2 = GedcomX.ResourceReference(parent2);
    }
    return this;
  };
  
  /**
   * Get parent2
   * 
   * @return {ResourceReference}
   */
  FamilyView.prototype.getParent2 = function(){
    return this.parent2;
  };
  
  /**
   * Get children
   * 
   * @return {ResourceReference[]} children
   */
  FamilyView.prototype.getChildren = function(){
    return this.children || [];
  };
  
  /**
   * Set children
   * 
   * @param {ResourceReference[]} children
   * @return {FamilyView} this
   */
  FamilyView.prototype.setChildren = function(children){
    return this._setArray(children, 'children', 'addChild');
  };
  
  /**
   * Add a child
   * 
   * @param {ResourceReference} child
   * @return {FamilyView} this
   */
  FamilyView.prototype.addChild = function(child){
    return this._arrayPush(child, 'children', GedcomX.ResourceReference);
  };
  
  /**
   * Export the object as JSON
   * 
   * @return {Object} JSON object
   */
  FamilyView.prototype.toJSON = function(){
    return this._toJSON(Base, FamilyView.jsonProps);
  };
  
  GedcomX.FamilyView = FamilyView;
  
};