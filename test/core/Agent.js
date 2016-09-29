var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Agent', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Agent(), GedcomX.Agent, 'An instance of Agent is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Agent(), GedcomX.Agent, 'An instance of Agent is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var agent = GedcomX.Agent({
      id: 'agent',
      identifiers: {
        $: 'ident'
      },
      names: [
        {
          lang: 'en',
          value: 'Name'
        }  
      ],
      homepage: {
        resource: 'http://homepage'
      },
      openid: {
        resource: 'http://openid'
      },
      accounts: [
        {
          accountName: 'jimbo'
        }  
      ],
      emails: [
        {
          resource: 'http://email'
        }  
      ],
      phones: [
        {
          resource: 'http://phone'
        }  
      ],
      addresses: [
        {
          value: 'big long address',
          postalCode: '123456'
        }  
      ],
      person: {
        resource: 'http://person'
      }
    });
    assert.equal(agent.getId(), 'agent');
    assert.equal(agent.getIdentifiers().identifiers.$, 'ident');
    assert.equal(agent.getNames().length, 1);
    assert.equal(agent.getNames()[0].getLang(), 'en');
    assert.equal(agent.getNames()[0].getValue(), 'Name');
    assert.equal(agent.getHomepage().getResource(), 'http://homepage');
    assert.equal(agent.getOpenid().getResource(), 'http://openid');
    assert.equal(agent.getAccounts().length, 1);
    assert.equal(agent.getAccounts()[0].getAccountName(), 'jimbo');
    assert.equal(agent.getEmails().length, 1);
    assert.equal(agent.getEmails()[0].getResource(), 'http://email');
    assert.equal(agent.getPhones().length, 1);
    assert.equal(agent.getPhones()[0].getResource(), 'http://phone');
    assert.equal(agent.getAddresses().length, 1);
    assert.equal(agent.getAddresses()[0].getValue(), 'big long address');
    assert.equal(agent.getAddresses()[0].getPostalCode(), '123456');
    assert.equal(agent.getPerson().getResource(), 'http://person');
  });
  
  it('Create with mixed data', function(){
    var agent = GedcomX.Agent({
      id: 'agent',
      identifiers: GedcomX.Identifiers({
        $: 'ident'
      }),
      names: [
        GedcomX.TextValue({
          lang: 'en',
          value: 'Name'
        })
      ],
      homepage: GedcomX.ResourceReference({
        resource: 'http://homepage'
      }),
      openid: GedcomX.ResourceReference({
        resource: 'http://openid'
      }),
      accounts: [
        GedcomX.OnlineAccount({
          accountName: 'jimbo'
        })
      ],
      emails: [
        GedcomX.ResourceReference({
          resource: 'http://email'
        })
      ],
      phones: [
        GedcomX.ResourceReference({
          resource: 'http://phone'
        })
      ],
      addresses: [
        GedcomX.Address({
          value: 'big long address',
          postalCode: '123456'
        })
      ],
      person: GedcomX.ResourceReference({
        resource: 'http://person'
      })
    });
    assert.equal(agent.getId(), 'agent');
    assert.equal(agent.getIdentifiers().identifiers.$, 'ident');
    assert.equal(agent.getNames().length, 1);
    assert.equal(agent.getNames()[0].getLang(), 'en');
    assert.equal(agent.getNames()[0].getValue(), 'Name');
    assert.equal(agent.getHomepage().getResource(), 'http://homepage');
    assert.equal(agent.getOpenid().getResource(), 'http://openid');
    assert.equal(agent.getAccounts().length, 1);
    assert.equal(agent.getAccounts()[0].getAccountName(), 'jimbo');
    assert.equal(agent.getEmails().length, 1);
    assert.equal(agent.getEmails()[0].getResource(), 'http://email');
    assert.equal(agent.getPhones().length, 1);
    assert.equal(agent.getPhones()[0].getResource(), 'http://phone');
    assert.equal(agent.getAddresses().length, 1);
    assert.equal(agent.getAddresses()[0].getValue(), 'big long address');
    assert.equal(agent.getAddresses()[0].getPostalCode(), '123456');
    assert.equal(agent.getPerson().getResource(), 'http://person');
  });
  
  it('Build', function(){
    var agent = GedcomX.Agent()
      .setId('agent')
      .setIdentifiers(GedcomX.Identifiers({$:'ident'}))
      .addName(GedcomX.TextValue().setLang('en').setValue('Name'))
      .setHomepage(GedcomX.ResourceReference().setResource('http://homepage'))
      .setOpenid(GedcomX.ResourceReference().setResource('http://openid'))
      .addAccount(GedcomX.OnlineAccount().setAccountName('jimbo'))
      .addEmail(GedcomX.ResourceReference().setResource('http://email'))
      .addPhone(GedcomX.ResourceReference().setResource('http://phone'))
      .addAddress(GedcomX.Address().setValue('big long address').setPostalCode('123456'))
      .setPerson(GedcomX.ResourceReference().setResource('http://person'));
    assert.equal(agent.getId(), 'agent');
    assert.equal(agent.getIdentifiers().identifiers.$, 'ident');
    assert.equal(agent.getNames().length, 1);
    assert.equal(agent.getNames()[0].getLang(), 'en');
    assert.equal(agent.getNames()[0].getValue(), 'Name');
    assert.equal(agent.getHomepage().getResource(), 'http://homepage');
    assert.equal(agent.getOpenid().getResource(), 'http://openid');
    assert.equal(agent.getAccounts().length, 1);
    assert.equal(agent.getAccounts()[0].getAccountName(), 'jimbo');
    assert.equal(agent.getEmails().length, 1);
    assert.equal(agent.getEmails()[0].getResource(), 'http://email');
    assert.equal(agent.getPhones().length, 1);
    assert.equal(agent.getPhones()[0].getResource(), 'http://phone');
    assert.equal(agent.getAddresses().length, 1);
    assert.equal(agent.getAddresses()[0].getValue(), 'big long address');
    assert.equal(agent.getAddresses()[0].getPostalCode(), '123456');
    assert.equal(agent.getPerson().getResource(), 'http://person');
  });
  
  it('toJSON', function(){
    var data = {
      id: 'agent',
      identifiers: {
        $: 'ident'
      },
      names: [
        {
          lang: 'en',
          value: 'Name'
        }  
      ],
      homepage: {
        resource: 'http://homepage'
      },
      openid: {
        resource: 'http://openid'
      },
      accounts: [
        {
          accountName: 'jimbo'
        }  
      ],
      emails: [
        {
          resource: 'http://email'
        }  
      ],
      phones: [
        {
          resource: 'http://phone'
        }  
      ],
      addresses: [
        {
          value: 'big long address',
          postalCode: '123456'
        }  
      ],
      person: {
        resource: 'http://person'
      }
    }, agent = GedcomX.Agent(data);
    assert.deepEqual(agent.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Agent();
    var obj2 = GedcomX.Agent(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});