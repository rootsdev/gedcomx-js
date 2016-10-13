var GedcomX = require('../'),
    utils = require('../utils');

/**
 * Someone or something that curates genealogical data, such as a genealogical 
 * researcher, user of software, or organization.
 * 
 * @class
 * @extends ExtensibleData
 * @param {Object} [json]
 */
var Agent = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Agent)){
    return new Agent(json);
  }
  
  // If the given object is already an instance then just return it. DON'T copy it.
  if(Agent.isInstance(json)){
    return json;
  }
  
  this.init(json);
};

Agent.prototype = Object.create(GedcomX.ExtensibleData.prototype);

Agent._gedxClass = Agent.prototype._gedxClass = 'GedcomX.Agent';

Agent.jsonProps = [
  'identifiers',
  'names',
  'homepage',
  'openid',
  'accounts',
  'emails',
  'phones',
  'addresses',
  'person'
];

/**
 * Check whether the given object is an instance of this class.
 * 
 * @param {Object} obj
 * @returns {Boolean}
 */
Agent.isInstance = function(obj){
  return utils.isInstance(obj, this._gedxClass);
};

/**
 * Initialize from JSON
 * 
 * @param {Object}
 * @return {Agent} this
 */
Agent.prototype.init = function(json){
  
  GedcomX.ExtensibleData.prototype.init.call(this, json);
  
  if(json){
    this.setIdentifiers(json.identifiers);
    this.setNames(json.names);
    this.setHomepage(json.homepage);
    this.setOpenid(json.openid);
    this.setAccounts(json.accounts);
    this.setEmails(json.emails);
    this.setPhones(json.phones);
    this.setAddresses(json.addresses);
    this.setPerson(json.person);
  }
  return this;
};

/**
 * Get the identifiers
 * 
 * @returns {Identifiers}
 */
Agent.prototype.getIdentifiers = function(){
  return this.identifiers;
};

/**
 * Set the identifiers
 * 
 * @param {Identifiers} identifiers
 * @returns {Agent}
 */
Agent.prototype.setIdentifiers = function(identifiers){
  if(identifiers){
    this.identifiers = GedcomX.Identifiers(identifiers);
  }
  return this;
};

/**
 * Get the names
 * 
 * @returns {TextValue[]}
 */
Agent.prototype.getNames = function(){
  return this.names || [];
};

/**
 * Set the names
 * 
 * @param {TextValue[]|Object[]} names
 * @returns {Agent}
 */
Agent.prototype.setNames = function(names){
  return this._setArray(names, 'names', 'addName');
};

/**
 * Add a name
 * 
 * @param {TextValue|Object} name
 * @return {Agent}
 */
Agent.prototype.addName = function(name){
  return this._arrayPush(name, 'names', GedcomX.TextValue);
};

/**
 * Get the home page
 * 
 * @returns {ResourceReference}
 */
Agent.prototype.getHomepage = function(){
  return this.homepage;
};

/**
 * Set the home page
 * 
 * @param {ResourceReference|Object} homepage
 * @returns {Agent}
 */
Agent.prototype.setHomepage = function(homepage){
  if(homepage){
    this.homepage = GedcomX.ResourceReference(homepage);
  }
  return this;
};

/**
 * Get the openid
 * 
 * @returns {ResourceReference}
 */
Agent.prototype.getOpenid = function(){
  return this.openid;
};

/**
 * Set the openid
 * 
 * @params {ResourceReference} openid
 * @returns {Agent}
 */
Agent.prototype.setOpenid = function(openid){
  if(openid){
    this.openid = GedcomX.ResourceReference(openid);
  }
  return this;
};

/**
 * Get the accounts
 * 
 * @returns {OnlineAccount[]}
 */
Agent.prototype.getAccounts = function(){
  return this.accounts || [];
};

/**
 * Set the accounts
 * 
 * @param {OnlineAccount[]|Object[]} accounts
 * @returns {Agent}
 */
Agent.prototype.setAccounts = function(accounts){
  return this._setArray(accounts, 'accounts', 'addAccount');
};

/**
 * Add an account
 * 
 * @param {OnlineAccount|Object} account
 * @returns {Agent}
 */
Agent.prototype.addAccount = function(account){
  return this._arrayPush(account, 'accounts', GedcomX.OnlineAccount);
};

/**
 * Get the emails
 * 
 * @returns {ResourceReference[]}
 */
Agent.prototype.getEmails= function(){
  return this.emails || [];
};

/**
 * Set the emails
 * 
 * @param {ResourceReference[]|Object[]} emails
 * @returns {Agent}
 */
Agent.prototype.setEmails = function(emails){
  return this._setArray(emails, 'emails', 'addEmail');
};

/**
 * Add an email
 * 
 * @param {ResourceReference|Object} email
 * @returns {Agent}
 */
Agent.prototype.addEmail = function(email){
  return this._arrayPush(email, 'emails', GedcomX.ResourceReference);
};

/**
 * Get the phones
 * 
 * @returns {ResourceReference[]}
 */
Agent.prototype.getPhones = function(){
  return this.phones || [];
};

/**
 * Set the phones
 * 
 * @param {ResourceReference[]|Object[]} phones
 * @returns {Agent}
 */
Agent.prototype.setPhones = function(phones){
  return this._setArray(phones, 'phones', 'addPhone');
};

/**
 * Add a phone
 * 
 * @param {ResourceReference|Object} phone
 * @returns {Agent}
 */
Agent.prototype.addPhone = function(phone){
  return this._arrayPush(phone, 'phones', GedcomX.ResourceReference);
};

/**
 * Get the addresses
 * 
 * @returns {Address[]}
 */
Agent.prototype.getAddresses = function(){
  return this.addresses || [];
};

/**
 * Set the addresses
 * 
 * @param {Address[]|Object[]} addresses
 * @returns {Agent}
 */
Agent.prototype.setAddresses = function(addresses){
  return this._setArray(addresses, 'addresses', 'addAddress');
};

/**
 * Add an address
 * 
 * @param {Address|Object} address
 * @returns {Agent}
 */
Agent.prototype.addAddress = function(address){
  return this._arrayPush(address, 'addresses', GedcomX.Address);
};

/**
 * Get the person reference
 * 
 * @returns {ResourceReference}
 */
Agent.prototype.getPerson = function(){
  return this.person;
};

/**
 * Set the person reference
 * 
 * @param {ResourceReference} person
 * @returns {Agent}
 */
Agent.prototype.setPerson = function(person){
  if(person){
    this.person = GedcomX.ResourceReference(person);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Agent.prototype.toJSON = function(){
  return this._toJSON(GedcomX.ExtensibleData, Agent.jsonProps);
};

module.exports = Agent;