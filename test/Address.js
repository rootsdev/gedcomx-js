var assert = require('chai').assert,
    GedcomX = require('../');

describe('Address', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Address(), GedcomX.Address, 'An instance of Address is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Address(), GedcomX.Address, 'An instance of Address is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var address = GedcomX.Address({
      value: 'big\nstreet\naddress',
      city: 'big city',
      country: 'COUNTRY',
      postalCode: '98765',
      stateOrProvince: 'ST',
      street: 'a street',
      street2: '2nd street',
      street3: '3rd street',
      street4: 'no way',
      street5: 'high way',
      street6: 'wow'
    });
    assert.equal(address.getValue(), 'big\nstreet\naddress');
    assert.equal(address.getCity(), 'big city');
    assert.equal(address.getCountry(), 'COUNTRY');
    assert.equal(address.getPostalCode(), '98765');
    assert.equal(address.getStateOrProvince(), 'ST');
    assert.equal(address.getStreet(), 'a street');
    assert.equal(address.getStreet2(), '2nd street');
    assert.equal(address.getStreet3(), '3rd street');
    assert.equal(address.getStreet4(), 'no way');
    assert.equal(address.getStreet5(), 'high way');
    assert.equal(address.getStreet6(), 'wow');
  });
  
  it('Build', function(){
    var address = GedcomX.Address()
      .setValue('big\nstreet\naddress')
      .setCity('big city')
      .setCountry('COUNTRY')
      .setPostalCode('98765')
      .setStateOrProvince('ST')
      .setStreet('a street')
      .setStreet2('2nd street')
      .setStreet3('3rd street')
      .setStreet4('no way')
      .setStreet5('high way')
      .setStreet6('wow');
    assert.equal(address.getValue(), 'big\nstreet\naddress');
    assert.equal(address.getCity(), 'big city');
    assert.equal(address.getCountry(), 'COUNTRY');
    assert.equal(address.getPostalCode(), '98765');
    assert.equal(address.getStateOrProvince(), 'ST');
    assert.equal(address.getStreet(), 'a street');
    assert.equal(address.getStreet2(), '2nd street');
    assert.equal(address.getStreet3(), '3rd street');
    assert.equal(address.getStreet4(), 'no way');
    assert.equal(address.getStreet5(), 'high way');
    assert.equal(address.getStreet6(), 'wow');
  });
  
  it('toJSON', function(){
    var data = {
      value: 'big\nstreet\naddress',
      city: 'big city',
      country: 'COUNTRY',
      postalCode: '98765',
      stateOrProvince: 'ST',
      street: 'a street',
      street2: '2nd street',
      street3: '3rd street',
      street4: 'no way',
      street5: 'high way',
      street6: 'wow'
    }, address = GedcomX.Address(data);
    assert.deepEqual(address.toJSON(), data);
  });
  
});