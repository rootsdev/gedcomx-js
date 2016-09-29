var assert = require('chai').assert,
    GedcomX = require('../../');

describe('PlaceDescription', function(){
  
  it('Create plain', function(){
    assert.instanceOf(GedcomX.PlaceDescription(), GedcomX.PlaceDescription, 'An instance of PlaceDescription is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.PlaceDescription(), GedcomX.PlaceDescription, 'An instance of PlaceDescription is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var place = GedcomX.PlaceDescription({
      names : [ 
        {
          lang : 'en',
          value : 'Pope\'s Creek, Westmoreland, Virginia, United States'
        }
      ],
      type : 'http://identifier/for/the/place/type',
      place : { resource : 'http://place' },
      jurisdiction : { resource : 'http://jurisdiction' },
      latitude : 27.9883575,
      longitude : 86.9252014,
      temporalDescription : { 
        formal: '+1899-01-04'
      },
      spatialDescription : {
        resource : 'http://uri/for/KML/document'
      }
    });
    assert.equal(place.getNames().length, 1);
    assert.equal(place.getNames()[0].getLang(), 'en');
    assert.equal(place.getNames()[0].getValue(), 'Pope\'s Creek, Westmoreland, Virginia, United States');
    assert.equal(place.getType(), 'http://identifier/for/the/place/type');
    assert.equal(place.getPlace().getResource(), 'http://place');
    assert.equal(place.getJurisdiction().getResource(), 'http://jurisdiction');
    assert.equal(place.getLatitude(), 27.9883575);
    assert.equal(place.getLongitude(), 86.9252014);
    assert.equal(place.getTemporalDescription().getFormal(), '+1899-01-04');
    assert.equal(place.getSpatialDescription().getResource(), 'http://uri/for/KML/document');
  });
  
  it('Create with mixed data', function(){
    var place = GedcomX.PlaceDescription({
      names : [ 
        GedcomX.TextValue({
          lang : 'en',
          value : 'Pope\'s Creek, Westmoreland, Virginia, United States'
        })
      ],
      type : 'http://identifier/for/the/place/type',
      place : GedcomX.ResourceReference({ resource : 'http://place' }),
      jurisdiction : GedcomX.ResourceReference({ resource : 'http://jurisdiction' }),
      latitude : 27.9883575,
      longitude : 86.9252014,
      temporalDescription : GedcomX.Date({ 
        formal: '+1899-01-04'
      }),
      spatialDescription : GedcomX.ResourceReference({
        resource : 'http://uri/for/KML/document'
      })
    });
    assert.equal(place.getNames().length, 1);
    assert.equal(place.getNames()[0].getLang(), 'en');
    assert.equal(place.getNames()[0].getValue(), 'Pope\'s Creek, Westmoreland, Virginia, United States');
    assert.equal(place.getType(), 'http://identifier/for/the/place/type');
    assert.equal(place.getPlace().getResource(), 'http://place');
    assert.equal(place.getJurisdiction().getResource(), 'http://jurisdiction');
    assert.equal(place.getLatitude(), 27.9883575);
    assert.equal(place.getLongitude(), 86.9252014);
    assert.equal(place.getTemporalDescription().getFormal(), '+1899-01-04');
    assert.equal(place.getSpatialDescription().getResource(), 'http://uri/for/KML/document');
  });
  
  it('Build', function(){
    var place = GedcomX.PlaceDescription()
      .addName(GedcomX.TextValue().setLang('en').setValue('Pope\'s Creek, Westmoreland, Virginia, United States'))
      .setType('http://identifier/for/the/place/type')
      .setPlace(GedcomX.ResourceReference({ resource : 'http://place' }))
      .setJurisdiction(GedcomX.ResourceReference({ resource : 'http://jurisdiction' }))
      .setLatitude(27.9883575)
      .setLongitude(86.9252014)
      .setTemporalDescription(GedcomX.Date({ 
        formal: '+1899-01-04'
      }))
      .setSpatialDescription(GedcomX.ResourceReference({
        resource : 'http://uri/for/KML/document'
      }));
    assert.equal(place.getNames().length, 1);
    assert.equal(place.getNames()[0].getLang(), 'en');
    assert.equal(place.getNames()[0].getValue(), 'Pope\'s Creek, Westmoreland, Virginia, United States');
    assert.equal(place.getType(), 'http://identifier/for/the/place/type');
    assert.equal(place.getPlace().getResource(), 'http://place');
    assert.equal(place.getJurisdiction().getResource(), 'http://jurisdiction');
    assert.equal(place.getLatitude(), 27.9883575);
    assert.equal(place.getLongitude(), 86.9252014);
    assert.equal(place.getTemporalDescription().getFormal(), '+1899-01-04');
    assert.equal(place.getSpatialDescription().getResource(), 'http://uri/for/KML/document');
  });
  
  it('toJSON', function(){
    var data = {
      names : [ 
        {
          lang : 'en',
          value : 'Pope\'s Creek, Westmoreland, Virginia, United States'
        }
      ],
      type : 'http://identifier/for/the/place/type',
      place : { resource : 'http://place' },
      jurisdiction : { resource : 'http://jurisdiction' },
      latitude : 27.9883575,
      longitude : 86.9252014,
      temporalDescription : { 
        formal: '+1899-01-04'
      },
      spatialDescription : {
        resource : 'http://uri/for/KML/document'
      }
    }, place = GedcomX.PlaceDescription(data);
    assert.deepEqual(place.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.PlaceDescription();
    var obj2 = GedcomX.PlaceDescription(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});