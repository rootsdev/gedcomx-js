var assert = require('chai').assert,
    GedcomX = require('../');

describe('Conclusion', function(){
  
  it('Create plain', function(){
    var newConclusion = new GedcomX.Conclusion(),
        conclusion = GedcomX.Conclusion();
    assert.instanceOf(newConclusion, GedcomX.Conclusion, 'An instance of Conclusion is not returned when calling the constructor with new.');
    assert.instanceOf(conclusion, GedcomX.Conclusion, 'An instance of Conclusion is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var conclusion = GedcomX.Conclusion({
      id: 'conclusion',
      lang: 'en',
      analysis: {
        resource: 'http://analysis/uri'
      },
      confidence: 'http://gedcomx.org/High',
      attribution: {
        created: 1145667891
      },
      sources: [
        {
          description: 'http://description/uri'
        }  
      ],
      notes: [
        {
          subject: 'Note title',
          text: 'Note text'
        }
      ]
    });
    assert.equal(conclusion.getId(), 'conclusion');
    assert.equal(conclusion.getLang(), 'en');
    assert.equal(conclusion.getAnalysis().getResource(), 'http://analysis/uri');
    assert.equal(conclusion.getConfidence(), 'http://gedcomx.org/High');
    assert.equal(conclusion.getAttribution().getCreated().getTime(), 1145667891);
    assert.equal(conclusion.getSources().length, 1);
    assert.equal(conclusion.getSources()[0].getDescription(), 'http://description/uri');
    assert.equal(conclusion.getNotes().length, 1);
    assert.equal(conclusion.getNotes()[0].getSubject(), 'Note title');
    assert.equal(conclusion.getNotes()[0].getText(), 'Note text');
  });
  
  it('Create with mixed data', function(){
    var conclusion = GedcomX.Conclusion({
      id: 'conclusion',
      lang: 'en',
      confidence: 'http://gedcomx.org/High',
      sources: [
        GedcomX.SourceReference({ description: 'http://description/uri' })
      ],
      notes: [
        GedcomX.Note({
          subject: 'Note title',
          text: 'Note text'
        })
      ]
    });
    assert.equal(conclusion.getId(), 'conclusion');
    assert.equal(conclusion.getLang(), 'en');
    assert.equal(conclusion.getConfidence(), 'http://gedcomx.org/High');
    assert.equal(conclusion.getSources().length, 1);
    assert.equal(conclusion.getSources()[0].getDescription(), 'http://description/uri');
    assert.equal(conclusion.getNotes().length, 1);
    assert.equal(conclusion.getNotes()[0].getSubject(), 'Note title');
    assert.equal(conclusion.getNotes()[0].getText(), 'Note text');
  });
  
  it('Build', function(){
    var conclusion = GedcomX.Conclusion()
      .setId('conclusion')
      .setLang('en')
      .setConfidence('http://gedcomx.org/High')
      .addSource(
        GedcomX.SourceReference()
          .setDescription('http://description/uri')
      )
      .addNote(
        GedcomX.Note()
          .setSubject('Note title')
          .setText('Note text')
      );
    assert.equal(conclusion.getId(), 'conclusion');
    assert.equal(conclusion.getLang(), 'en');
    assert.equal(conclusion.getConfidence(), 'http://gedcomx.org/High');
    assert.equal(conclusion.getSources().length, 1);
    assert.equal(conclusion.getSources()[0].getDescription(), 'http://description/uri');
    assert.equal(conclusion.getNotes().length, 1);
    assert.equal(conclusion.getNotes()[0].getSubject(), 'Note title');
    assert.equal(conclusion.getNotes()[0].getText(), 'Note text');
  });
  
  it('toJSON', function(){
    var conclusionData = {
        id: 'conclusion',
        lang: 'en',
        analysis: {
          resource: 'http://analysis/uri'
        },
        confidence: 'http://gedcomx.org/High',
        attribution: {
          created: 1145667891
        },
        sources: [
          {
            description: 'http://description/uri'
          }  
        ],
        notes: [
          {
            subject: 'Note title',
            text: 'Note text'
          }
        ]
      },
      conclusion = GedcomX.Conclusion(conclusionData);
    assert.deepEqual(conclusion.toJSON(), conclusionData);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Conclusion();
    var obj2 = GedcomX.Conclusion(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});