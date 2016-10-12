var assert = require('chai').assert,
    AtomCommon = require('../../src/atom/AtomCommon');

describe('AtomCommon', function(){
  
  it('init from JSON', function(){
    var common = AtomCommon({
      base: 'base',
      lang: 'lang'
    });
    assert.equal(common.getBase(), 'base');
    assert.equal(common.getLang(), 'lang');
  });
  
  it('build', function(){
    var common = AtomCommon()
      .setBase('base')
      .setLang('lang');
    assert.equal(common.getBase(), 'base');
    assert.equal(common.getLang(), 'lang');
  });
  
  it('toJSON', function(){
    var data = {
      base: 'base',
      lang: 'lang'
    };
    assert.deepEqual(AtomCommon(data).toJSON(), data);
  });
  
});