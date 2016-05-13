var assert = require('chai').assert,
    Conclusion = require('../src/Conclusion'),
    SourceReference = require('../src/SourceReference'),
    Note = require('../src/Note');

describe('Conclusion', function(){
  
  it('Create plain', function(){
    var newConclusion = new Conclusion(),
        conclusion = Conclusion();
    assert.instanceOf(newConclusion, Conclusion, 'An instance of Conclusion is not returned when calling the constructor with new.');
    assert.instanceOf(conclusion, Conclusion, 'An instance of Conclusion is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var conclusion = Conclusion({
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
    var conclusion = Conclusion({
      id: 'conclusion',
      lang: 'en',
      confidence: 'http://gedcomx.org/High',
      sources: [
        SourceReference({ description: 'http://description/uri' })
      ],
      notes: [
        Note({
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
    var conclusion = Conclusion()
      .setId('conclusion')
      .setLang('en')
      .setConfidence('http://gedcomx.org/High')
      .addSource(
        SourceReference()
          .setDescription('http://description/uri')
      )
      .addNote(
        Note()
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
      conclusion = Conclusion(conclusionData);
    assert.deepEqual(conclusion.toJSON(), conclusionData);
  });
  
});