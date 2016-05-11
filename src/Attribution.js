var ExtensibleData = require('./ExtensibleData'),
    ResourceReference = require('./ResourceReference');

/**
 * Define who is contributing information, when they contributed it, 
 * and why they are making the contribution.
 * 
 * @constructor
 * @param {Object} json
 */
var Attribution = function(json){
  
  // Prevent errors when creating an object without using `new`
  var instance = Object.create(Attribution.prototype);
  
  ExtensibleData.call(this, json);
  
  if(json){
    instance.setChangeMessage(json.changeMessage);
    instance.setContributor(json.contributor);
    instance.setCreated(json.created);
    instance.setCreator(json.creator);
    instance.setModified(json.modified);
  }
  
  return instance;
};

/**
 * Get the change message.
 * 
 * @returns {String} Change message
 */
Attribution.prototype.getChangeMessage = function(){
  return this.changeMessage;
};

/**
 * Set the change message.
 * 
 * @param {String} changeMessage
 * @returns {Attribution} This object
 */
Attribution.prototype.setChangeMessage = function(changeMessage){
  this.changeMessage = changeMessage;
  return this;
};

/**
 * Get the contributor.
 * 
 * @returns {ResourceReference} contributor
 */
Attribution.prototype.getContributor = function(){
  return this.contributor;
};

/**
 * Set the contributor
 * 
 * @param {Object|ResourceReference} contributor ResourceReference representing the contributor.
 * @returns {Attribution} This instance
 */
Attribution.prototype.setContributor = function(contributor){
  if(contributor){
    this.contributor = ResourceReference(contributor);
  }
  return this;
};

/**
 * Get the created timestamp
 * 
 * @returns {Date} created
 */
Attribution.prototype.getCreated = function(){
  return this.created;
};

/**
 * Set the created timestamp
 * 
 * @param {Date|Number} date Integer timestamp (milliseconds since epoch) or JavaScript Date instance
 * @returns {Attribution} This instance
 */
Attribution.prototype.setCreated = function(date){
  this.created = new Date(date);
  return this;
};

/**
 * Get the creator
 * 
 * @returns {ResourceReference} Creator
 */
Attribution.prototype.getCreator = function(){
  return this.creator;
};

/**
 * Set the creator
 * 
 * @param {Object|ResourceReference} creator ResourceReference representing the creator.
 * @returns {Attribution} This instance
 */
Attribution.prototype.setCreator = function(creator){
  if(creator){
    this.creator = new ResourceReference(creator);
  }
};

/**
 * Get the modified timestamp
 * 
 * @returns {Date} modified
 */
Attribution.prototype.getModified = function(){
  return this.modified;
};

/**
 * Set the modified timestamp
 * 
 * @param {Date|Number} date Integer timestamp (milliseconds since epoch) or JavaScript Date instance
 * @returns {Attribution} This instance
 */
Attribution.prototype.setModified = function(date){
  this.modified = new Date(date);
  return this;
};

module.exports = Attribution;