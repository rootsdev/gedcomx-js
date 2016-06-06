var assert = require('chai').assert,
    GedcomX = require('../');

describe('OnlineAccount', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.OnlineAccount(), GedcomX.OnlineAccount, 'An instance of OnlineAccount is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.OnlineAccount(), GedcomX.OnlineAccount, 'An instance of OnlineAccount is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var account = GedcomX.OnlineAccount({
      accountName: 'jimbo',
      serviceHomepage: {
        resource: 'http://service/home'
      }
    });
    assert.equal(account.getAccountName(), 'jimbo');
    assert.equal(account.getServiceHomepage().getResource(), 'http://service/home');
  });
  
  it('Create with mixed data', function(){
    var account = GedcomX.OnlineAccount({
      accountName: 'jimbo',
      serviceHomepage: GedcomX.ResourceReference({
        resource: 'http://service/home'
      })
    });
    assert.equal(account.getAccountName(), 'jimbo');
    assert.equal(account.getServiceHomepage().getResource(), 'http://service/home');
  });
  
  it('Build', function(){
    var account = GedcomX.OnlineAccount()
      .setAccountName('jimbo')
      .setServiceHomepage(GedcomX.ResourceReference().setResource('http://service/home'));
    assert.equal(account.getAccountName(), 'jimbo');
    assert.equal(account.getServiceHomepage().getResource(), 'http://service/home');
  });
  
  it('toJSON', function(){
    var data = {
      accountName: 'jimbo',
      serviceHomepage: {
        resource: 'http://service/home'
      }
    }, account = GedcomX.OnlineAccount(data);
    assert.deepEqual(account.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.OnlineAccount();
    var obj2 = GedcomX.OnlineAccount(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});