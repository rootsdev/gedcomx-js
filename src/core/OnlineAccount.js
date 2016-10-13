var GedcomX = require('../'),
    utils = require('../utils');

/**
 * An online account for a web application.
 * 
 * @see {@link https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md#online-account|GEDCOM X JSON Spec}
 * 
 * @class
 * @extends ExtensibleData
 * @param {Object} [json]
 */
var OnlineAccount = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof OnlineAccount)){
    return new OnlineAccount(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(OnlineAccount.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

OnlineAccount.prototype = Object.create(GedcomX.ExtensibleData.prototype);

OnlineAccount._gedxClass = OnlineAccount.prototype._gedxClass = 'GedcomX.OnlineAccount';

OnlineAccount.jsonProps = [
  'serviceHomepage',
  'accountName'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
OnlineAccount.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {OnlineAccount} this
 */
OnlineAccount.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
  if(json){
    this.setAccountName(json.accountName);
    this.setServiceHomepage(json.serviceHomepage);
  }
  return this;
};

/**
 * Get the service home page
 * 
 * @returns {ResourceReference}
 */
OnlineAccount.prototype.getServiceHomepage = function(){
  return this.serviceHomepage;
};

/**
 * Set the service home page
 * 
 * @param {ResourceReference} serviceHomepage
 * @returns {OnlineAccount}
 */
OnlineAccount.prototype.setServiceHomepage = function(serviceHomepage){
  if(serviceHomepage){
    this.serviceHomepage = GedcomX.ResourceReference(serviceHomepage);
  }
  return this;
};

/**
 * Get the account name
 * 
 * @return {String}
 */
OnlineAccount.prototype.getAccountName = function(){
  return this.accountName;
};

/**
 * Set the account name
 * 
 * @param {String} accountName
 * @returns {OnlineAccount}
 */
OnlineAccount.prototype.setAccountName = function(accountName){
  this.accountName = accountName;
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
OnlineAccount.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, OnlineAccount.jsonProps);
};

module.exports = OnlineAccount;