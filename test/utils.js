var assert = require('chai').assert,
    utils = require('../src/utils'),
    GedcomX = require('../');

describe('utils', function(){
  
  it('removeEmpty', function(){
    assert.deepEqual(
      utils.removeEmpty({
        a: undefined,
        b: 0,
        c: false,
        d: null,
        e: ''
      }),
      {
        b: 0,
        c: false,
        d: null,
        e: ''
      }
    );
  });
  
  it('pick', function(){
    assert.deepEqual(
      utils.pick({
        a: '1',
        b: 2,
        c: undefined,
        d: null
      }, ['a','c']),
      {
        a: '1',
        c: undefined
      }
    );
  });
  
  describe('merge', function(){
    
    it('objects', function(){
      var dest = {},
          merged = utils.merge(
            dest,
            {
              a: 1,
              b: {
                b1: 'foo'
              }
            },
            {
              a: 2,
              b: {
                b2: 'bar'
              }
            }
          );
      assert.strictEqual(dest, merged);
      assert.deepEqual(
        dest,
        {
          a: 2,
          b: {
            b1: 'foo',
            b2: 'bar'
          }
        }
      );
    });
    
    it('arrays', function(){
      var dest = {},
          merged = utils.merge(
            dest,
            {
              facts: [
                {
                  date: {
                    formal: '+2001'
                  }
                }  
              ]
            }
          );
      assert.strictEqual(dest, merged);
      assert.deepEqual(dest, {
        facts: [
          {
            date: {
              formal: '+2001'
            }
          }  
        ]
      });
    });
    
  });
  
  describe('toJSON', function(){
    
    it('arrays', function(){
      assert.deepEqual(
        utils.toJSON({
          facts: [
            GedcomX.Fact({
              date: {
                formal: '+2001'
              }
            })
          ]
        }),
        {
          facts: [
            {
              date: {
                formal: '+2001'
              }
            }  
          ]
        }
      );
    });
    
  });
  
});