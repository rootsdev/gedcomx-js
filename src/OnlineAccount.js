var ExtensibleData = require('./ExtensibleData'),
    ResourceReference = require('./ResourceReference');

/**
 * An online account for a web application.
 * 
 * @constructor
 * @param {Object} [json]
 */
var OnlineAccount = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof OnlineAccount)){
    return new OnlineAccount(json);
  }
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setAccountName(json.accountName);
    this.setServiceHomepage(json.serviceHomepage);
  }
};

OnlineAccount.prototype = Object.create(ExtensibleData.prototype);

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
    this.serviceHomepage = ResourceReference(serviceHomepage);
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
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.serviceHomepage){
    json.serviceHomepage = this.serviceHomepage.toJSON();
  }
  
  if(this.accountName){
    json.accountName = this.accountName;
  }
  
  return json;
};

module.exports = OnlineAccount;