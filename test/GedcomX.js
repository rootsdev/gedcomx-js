var chai = require('chai');
chai.use(require('chai-json-schema'));

var assert = chai.assert,
    GedcomXSchema = require('gedcomx-json-schema'),
    GedcomX = require('../');

describe('GedcomX', function(){
  
  var fullJSON = {
    persons: [
      {
        private: false,
        gender: {
          type: 'http://gedcomx.org/Female'
        },
        names: [
          {
            type: 'http://gedcomx.org/BirthName',
            nameForms: [
              {
                fullText: 'Joanna Hopkins'
              }
            ]
          }  
        ],
        facts: [
          {
            type: 'http://gedcomx.org/Birth',
            date: {
              formal: '+2001-04-09'
            },
            place: {
              original: 'Farm house'
            }
          }  
        ]
      } 
    ],
    relationships: [
      {
        type: 'http://gedcomx.org/Couple',
        person1: {
          resource: 'http://identifier/for/person/1'
        },
        person2: {
          resource: 'http://identifier/for/person/2'
        },
        facts: [
          {
            type: 'http://gedcomx.org/Marriage'
          }
        ]
      }  
    ],
    sourceDescriptions: [
      {
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
        coverage: {
          temporal: {
            formal: '+2015'
          },
          spatial: {
            original: 'A place'
          }
        },
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
        repository: {
          resource: 'http://repository'
        }
      }
    ],
    agents: [
      {
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
      }  
    ],
    events: [
      {
        type: 'http://gedcomx.org/Marriage',
        date: {
          formal: '+2002-06-06'
        },
        place: {
          original: 'Her town, MN'
        },
        roles: [
          {
            person: {
              resource: 'http://groom'
            },
            type: 'http://gedcomx.org/Participant'
          }
        ]
      }  
    ],
    documents: [
      {
        type: 'http://gedcomx.org/Abstract',
        extracted: false,
        textType: 'plain',
        text: 'Lots of text',
        attribution: {
          created: 123456789
        }
      }  
    ],
    places: [
      {
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
      }
    ]
  };
  
  it('Create plain', function(){
    var newGedx = new GedcomX(),
        gedx = GedcomX();
    assert.instanceOf(newGedx, GedcomX, 'An instance of GedcomX is not returned when calling the constructor with new.');
    assert.instanceOf(gedx, GedcomX, 'An instance of GedcomX is not returned when calling the constructor without new.');
    assert.jsonSchema(newGedx.toJSON(), GedcomXSchema);
    assert.jsonSchema(gedx.toJSON(), GedcomXSchema);
  });
  
  it('Create with JSON', function(){
    var gedx = GedcomX(fullJSON);
    
    tests(gedx);
  });
  
  it('Create with mixed data', function(){
    var gedx = GedcomX({
      persons: [
        GedcomX.Person({
          gender: {
            type: 'http://gedcomx.org/Female'
          },
          names: [
            {
              type: 'http://gedcomx.org/BirthName',
              nameForms: [
                {
                  fullText: 'Joanna Hopkins'
                }
              ]
            }  
          ],
          facts: [
            {
              type: 'http://gedcomx.org/Birth',
              date: {
                formal: '+2001-04-09'
              },
              place: {
                original: 'Farm house'
              }
            }  
          ]
        })
      ],
      relationships: [
        GedcomX.Relationship({
          type: 'http://gedcomx.org/Couple',
          person1: {
            resource: 'http://identifier/for/person/1'
          },
          person2: {
            resource: 'http://identifier/for/person/2'
          },
          facts: [
            GedcomX.Fact({
              type: 'http://gedcomx.org/Marriage'
            })
          ]
        })  
      ],
      sourceDescriptions: [
        GedcomX.SourceDescription({
          resourceType: 'http://some/type',
          citations: [
            GedcomX.SourceCitation({
              lang: 'en',
              value: 'Long source citation'
            })
          ],
          mediaType: 'book',
          about: 'http://a/resource',
          mediator: {
            resource: 'http://mediator'
          },
          sources: [
            GedcomX.SourceReference({
              description: 'http://source/reference'
            })
          ],
          analysis: {
            resource: 'http://analysis'
          },
          componentOf: {
            description: 'http://container'
          },
          titles: [
            GedcomX.TextValue({
              lang: 'en',
              value: 'Title'
            }),
            {
              lang: 'es',
              value: 'Titulo'
            }
          ],
          notes: [
            GedcomX.Note({
              subject: 'Note',
              text: 'Some note text'
            })
          ],
          attribution: {
            created: 1234578129
          },
          rights: [
            GedcomX.ResourceReference({
              resource: 'https://some/right'
            })
          ],
          coverage: GedcomX.Coverage({
            temporal: {
              formal: '+2015'
            },
            spatial: {
              original: 'A place'
            }
          }),
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
          repository: GedcomX.ResourceReference({
            resource: 'http://repository'
          })
        })  
      ],
      agents: [
        GedcomX.Agent({
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
        })  
      ],
      events: [
        GedcomX.Event({
          type: 'http://gedcomx.org/Marriage',
          date: GedcomX.Date({
            formal: '+2002-06-06'
          }),
          place: GedcomX.PlaceReference({
            original: 'Her town, MN'
          }),
          roles: [
            GedcomX.EventRole({
              person: {
                resource: 'http://groom'
              },
              type: 'http://gedcomx.org/Participant'
            })
          ]
        })  
      ],
      documents: [
        GedcomX.Document({
          type: 'http://gedcomx.org/Abstract',
          extracted: false,
          textType: 'plain',
          text: 'Lots of text',
          attribution: GedcomX.Attribution({
            created: 123456789
          })
        })
      ],
      places: [
        GedcomX.PlaceDescription({
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
        })  
      ]
    });
    
    tests(gedx);
  });
  
  it('Build', function(){
    var gedx = GedcomX()
      .addPerson(
        GedcomX.Person()
          .setId('testPerson')
          .setPrivate(true)
          .setGender(GedcomX.Gender().setType('http://gedcomx.org/Female'))
          .addName(GedcomX.Name().addNameForm(GedcomX.NameForm().setFullText('Joanna Hopkins')))
          .addFact(GedcomX.Fact().setDate(GedcomX.Date().setFormal('+2001-04-09')).setPlace(GedcomX.PlaceReference().setOriginal('Farm house')))
      )
      .addRelationship(
        GedcomX.Relationship()
          .setType('http://gedcomx.org/Couple')
          .setPerson1(GedcomX.ResourceReference().setResource('http://identifier/for/person/1'))
          .setPerson2(GedcomX.ResourceReference().setResource('http://identifier/for/person/2'))
          .addFact(GedcomX.Fact().setType('http://gedcomx.org/Marriage'))  
      )
      .addSourceDescription(
        GedcomX.SourceDescription()
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
          .setCoverage(
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
          .setRepository(GedcomX.ResourceReference().setResource('http://repository'))  
      )
      .addAgent(
        GedcomX.Agent()
          .setId('agent')
          .setIdentifiers(GedcomX.Identifiers({$:'ident'}))
          .addName(GedcomX.TextValue().setLang('en').setValue('Name'))
          .setHomepage(GedcomX.ResourceReference().setResource('http://homepage'))
          .setOpenid(GedcomX.ResourceReference().setResource('http://openid'))
          .addAccount(GedcomX.OnlineAccount().setAccountName('jimbo'))
          .addEmail(GedcomX.ResourceReference().setResource('http://email'))
          .addPhone(GedcomX.ResourceReference().setResource('http://phone'))
          .addAddress(GedcomX.Address().setValue('big long address').setPostalCode('123456'))
          .setPerson(GedcomX.ResourceReference().setResource('http://person'))  
      )
      .addEvent(
        GedcomX.Event()
          .setType('http://gedcomx.org/Marriage')
          .setDate(GedcomX.Date().setFormal('+2002-06-06'))
          .setPlace(GedcomX.PlaceReference().setOriginal('Her town, MN'))
          .addRole(GedcomX.EventRole()
            .setType('http://gedcomx.org/Participant')
            .setPerson(GedcomX.ResourceReference().setResource('http://groom')))  
      )
      .addDocument(
        GedcomX.Document()
        .setType('http://gedcomx.org/Abstract')
        .setExtracted(false)
        .setTextType('plain')
        .setText('Lots of text')
        .setAttribution(GedcomX.Attribution().setCreated(123456789))          
      )
      .addPlace(
        GedcomX.PlaceDescription()
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
          }))
      );
    
    tests(gedx);
  });
  
  it('toJSON', function(){
    var gedx = GedcomX(fullJSON);
    assert.deepEqual(gedx.toJSON(), fullJSON);
    assert.jsonSchema(gedx.toJSON(), GedcomXSchema);
  });
  
});

function tests(gedx){
  assert.equal(gedx.getPersons().length, 1);
  var person = gedx.getPersons()[0];
  assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
  assert.equal(person.getNames().length, 1);
  assert.equal(person.getFacts().length, 1);
  
  assert.equal(gedx.getRelationships().length, 1);
  var relationship = gedx.getRelationships()[0];
  assert.equal(relationship.getType(), 'http://gedcomx.org/Couple');
  assert.equal(relationship.getPerson1().getResource(), 'http://identifier/for/person/1');
  assert.equal(relationship.getPerson2().getResource(), 'http://identifier/for/person/2');
  assert.equal(relationship.getFacts().length, 1);
  assert.equal(relationship.getFacts()[0].getType(), 'http://gedcomx.org/Marriage');
  
  assert.equal(gedx.getSourceDescriptions().length, 1);
  var description = gedx.getSourceDescriptions()[0];
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
  assert.equal(description.getCoverage().getTemporal().getFormal(), '+2015');
  assert.equal(description.getCoverage().getSpatial().getOriginal(), 'A place');
  assert.equal(description.getDescriptions().length, 1);
  assert.equal(description.getDescriptions()[0].getValue(), 'A description');
  assert.equal(description.getIdentifiers().identifiers.$, 'identifier');
  assert.equal(description.getCreated(), 1000000);
  assert.equal(description.getModified(), 11111111);
  assert.equal(description.getRepository().getResource(), 'http://repository');
  
  assert.equal(gedx.getAgents().length, 1);
  var agent = gedx.getAgents()[0];
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
  
  assert.equal(gedx.getEvents().length, 1);
  var event = gedx.getEvents()[0];
  assert.equal(event.getType(), 'http://gedcomx.org/Marriage');
  assert.equal(event.getDate().getFormal(), '+2002-06-06');
  assert.equal(event.getPlace().getOriginal(), 'Her town, MN');
  assert.equal(event.getRoles().length, 1);
  assert.equal(event.getRoles()[0].getPerson().getResource(), 'http://groom');
  assert.equal(event.getRoles()[0].getType(), 'http://gedcomx.org/Participant');
  
  assert.equal(gedx.getDocuments().length, 1);
  var doc = gedx.getDocuments()[0];
  assert.equal(doc.getType(), 'http://gedcomx.org/Abstract');
  assert.equal(doc.getExtracted(), false);
  assert.equal(doc.getTextType(), 'plain');
  assert.equal(doc.getText(), 'Lots of text');
  assert.equal(doc.getAttribution().getCreated().getTime(), 123456789);
  
  assert.equal(gedx.getPlaces().length, 1);
  var place = gedx.getPlaces()[0];
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
  
  assert.jsonSchema(gedx.toJSON(), GedcomXSchema);
}