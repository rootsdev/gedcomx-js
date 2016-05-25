var ExtensibleData = require('./ExtensibleData'),
    ResourceReference = require('./ResourceReference'),
    OnlineAccount = require('./OnlineAccount'),
    Address = require('./Address'),
    Identifiers = require('./Identifiers'),
    TextValue = require('./TextValue');

/**
 * Someone or something that curates genealogical data, such as a genealogical 
 * researcher, user of software, or organization.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Agent = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Agent)){
    return new Agent(json);
  }
  
  ExtensibleData.call(this, json);
  
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
};

Agent.prototype = Object.create(ExtensibleData.prototype);

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
    this.identifiers = Identifiers(identifiers);
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
  if(Array.isArray(names)){
    var agent = this;
    this.names = [];
    names.forEach(function(name){
      agent.addName(name);
    });
  }
  return this;
};

/**
 * Add a name
 * 
 * @param {TextValue|Object} name
 * @return {Agent}
 */
Agent.prototype.addName = function(name){
  if(name){
    if(!Array.isArray(this.names)){
      this.names = [];
    }
    this.names.push(TextValue(name));
  }
  return this;
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
    this.homepage = ResourceReference(homepage);
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
    this.openid = ResourceReference(openid);
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
  if(Array.isArray(accounts)){
    var agent = this;
    agent.accounts = [];
    accounts.forEach(function(account){
      agent.addAccount(account);
    });
  }
  return this;
};

/**
 * Add an account
 * 
 * @param {OnlineAccount|Object} account
 * @returns {Agent}
 */
Agent.prototype.addAccount = function(account){
  if(account){
    if(!Array.isArray(this.accounts)){
      this.accounts = [];
    }
    this.accounts.push(OnlineAccount(account));
  }
  return this;
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
  if(Array.isArray(emails)){
    var agent = this;
    agent.emails = [];
    emails.forEach(function(email){
      agent.addEmail(email);
    });
  }
  return this;
};

/**
 * Add an email
 * 
 * @param {ResourceReference|Object} email
 * @returns {Agent}
 */
Agent.prototype.addEmail = function(email){
  if(email){
    if(!Array.isArray(this.emails)){
      this.emails = [];
    }
    this.emails.push(ResourceReference(email));
  }
  return this;
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
  if(Array.isArray(phones)){
    var agent = this;
    agent.phones = [];
    phones.forEach(function(phone){
      agent.addPhone(phone);
    });
  }
  return this;
};

/**
 * Add a phone
 * 
 * @param {ResourceReference|Object} phone
 * @returns {Agent}
 */
Agent.prototype.addPhone = function(phone){
  if(phone){
    if(!Array.isArray(this.phones)){
      this.phones = [];
    }
    this.phones.push(ResourceReference(phone));
  }
  return this;
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
  if(Array.isArray(addresses)){
    var agent = this;
    agent.addresses = [];
    addresses.forEach(function(address){
      agent.addAddress(address);
    });
  }
  return this;
};

/**
 * Add an address
 * 
 * @param {Address|Object} address
 * @returns {Agent}
 */
Agent.prototype.addAddress = function(address){
  if(address){
    if(!Array.isArray(this.addresses)){
      this.addresses = [];
    }
    this.addresses.push(Address(address));
  }
  return this;
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
    this.person = ResourceReference(person);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Agent.prototype.toJSON = function(){
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.identifiers){
    json.identifiers = this.identifiers.toJSON();
  }
  
  if(this.names){
    json.names = this.names.map(function(n){
      return n.toJSON();
    });
  }
  
  if(this.homepage){
    json.homepage = this.homepage.toJSON();
  }
  
  if(this.openid){
    json.openid = this.openid.toJSON();
  }
  
  if(this.accounts){
    json.accounts = this.accounts.map(function(a){
      return a.toJSON();
    });
  }
  
  if(this.emails){
    json.emails = this.emails.map(function(e){
      return e.toJSON();
    });
  }
  
  if(this.phones){
    json.phones = this.phones.map(function(p){
      return p.toJSON();
    });
  }
  
  if(this.addresses){
    json.addresses = this.addresses.map(function(a){
      return a.toJSON();
    });
  }
  
  if(this.person){
    json.person = this.person.toJSON();
  }
  
  return json;
};

module.exports = Agent;