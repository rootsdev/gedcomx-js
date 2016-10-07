var assert = require('chai').assert,
    GedcomX = require('../../');

describe('SourceDescription', function(){
  
  var fullJSON = {
    resourceType: 'http://some/type',
    citations: [
      {
        lang: 'en',
        value: 'Long source citation'
      }
    ],
    mediaType: 'book',
    about: 'http://a/resource',
    mediator: {
      resource: 'http://mediator'
    },
    sources: [
      {
        description: 'http://source/reference'
      }
    ],
    analysis: {
      resource: 'http://analysis'
    },
    componentOf: {
      description: 'http://container'
    },
    titles: [
      {
        lang: 'en',
        value: 'Title'
      },
      {
        lang: 'es',
        value: 'Titulo'
      }
    ],
    notes: [
      {
        subject: 'Note',
        text: 'Some note text'
      }
    ],
    attribution: {
      created: 1234578129
    },
    rights: [
      {
        resource: 'https://some/right'
      }
    ],
    coverage: [{
      temporal: {
        formal: '+2015'
      },
      spatial: {
        original: 'A place'
      }
    }],
    descriptions: [
      {
        value: 'A description'
      }
    ],
    identifiers: {
      $: 'identifier'
    },
    created: 1000000,
    modified: 11111111,
    sortKey: '123456',
    version: '123',
    repository: {
      resource: 'http://repository'
    }
  };
  
  it('Create with JSON', function(){
    var description = GedcomX.SourceDescription(fullJSON);
    tests(description);
  });
  
  it('Build', function(){
    var description = GedcomX.SourceDescription()
      .setResourceType('http://some/type')
      .addCitation(GedcomX.SourceCitation().setLang('en').setValue('Long source citation'))
      .setMediaType('book')
      .setAbout('http://a/resource')
      .setMediator(GedcomX.ResourceReference().setResource('http://mediator'))
      .addSource(GedcomX.SourceReference().setDescription('http://source/reference'))
      .setAnalysis(GedcomX.ResourceReference().setResource('http://analysis'))
      .setComponentOf(GedcomX.SourceReference().setDescription('http://container'))
      .addTitle(GedcomX.TextValue().setLang('en').setValue('Title'))
      .addTitle(GedcomX.TextValue().setLang('es').setValue('Titulo'))
      .addNote(GedcomX.Note().setSubject('Note').setText('Some note text'))
      .setAttribution(GedcomX.Attribution().setCreated(1234578129))
      .addRight(GedcomX.ResourceReference().setResource('https://some/right'))
      .addCoverage(
        GedcomX.Coverage()
          .setTemporal(GedcomX.Date().setFormal('+2015'))
          .setSpatial(GedcomX.PlaceReference().setOriginal('A place'))
      )
      .addDescription(GedcomX.TextValue().setValue('A description'))
      .setIdentifiers(GedcomX.Identifiers({
        $: 'identifier'
      }))
      .setCreated(1000000)
      .setModified(11111111)
      .setSortKey('123456')
      .setVersion('123')
      .setRepository(GedcomX.ResourceReference().setResource('http://repository'));
    tests(description);
  });
  
  it('toJSON', function(){
    var description = GedcomX.SourceDescription(fullJSON);
    assert.deepEqual(description.toJSON(), fullJSON);
  });
  
});

function tests(description){
  assert.equal(description.getResourceType(), 'http://some/type');
  assert.equal(description.getCitations().length, 1);
  assert.equal(description.getCitations()[0].getLang(), 'en');
  assert.equal(description.getCitations()[0].getValue(), 'Long source citation');
  assert.equal(description.getMediaType(), 'book');
  assert.equal(description.getAbout(), 'http://a/resource');
  assert.equal(description.getMediator().getResource(), 'http://mediator');
  assert.equal(description.getSources().length, 1);
  assert.equal(description.getSources()[0].getDescription(), 'http://source/reference');
  assert.equal(description.getAnalysis().getResource(), 'http://analysis');
  assert.equal(description.getComponentOf().getDescription(), 'http://container');
  assert.equal(description.getTitles().length, 2);
  assert.equal(description.getTitles()[0].getLang(), 'en');
  assert.equal(description.getTitles()[0].getValue(), 'Title');
  assert.equal(description.getTitles()[1].getLang(), 'es');
  assert.equal(description.getTitles()[1].getValue(), 'Titulo');
  assert.equal(description.getNotes().length, 1);
  assert.equal(description.getNotes()[0].getSubject(), 'Note');
  assert.equal(description.getNotes()[0].getText(), 'Some note text');
  assert.equal(description.getAttribution().getCreated().getTime(), 1234578129);
  assert.equal(description.getRights().length, 1);
  assert.equal(description.getRights()[0].getResource(), 'https://some/right');
  assert.equal(description.getCoverage().length, 1);
  assert.equal(description.getCoverage()[0].getTemporal().getFormal(), '+2015');
  assert.equal(description.getCoverage()[0].getSpatial().getOriginal(), 'A place');
  assert.equal(description.getDescriptions().length, 1);
  assert.equal(description.getDescriptions()[0].getValue(), 'A description');
  assert.equal(description.getIdentifiers().identifiers.$, 'identifier');
  assert.equal(description.getCreated(), 1000000);
  assert.equal(description.getModified(), 11111111);
  assert.equal(description.getSortKey(), '123456');
  assert.equal(description.getVersion(), '123');
  assert.equal(description.getRepository().getResource(), 'http://repository');
}