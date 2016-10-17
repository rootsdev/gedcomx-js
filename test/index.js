var assert = require('chai').assert,
    GedcomX = require('../');
    
describe('GedcomX', function(){
  
  it('GedcomX() returns a Root', function(){
    assert(GedcomX.Root.isInstance(GedcomX()));
  });
  
  it('Base is exposed', function(){
    assert(GedcomX.Base.isInstance(GedcomX.Base()));
  });
  
});