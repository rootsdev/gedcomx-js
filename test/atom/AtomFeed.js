var assert = require('chai').assert,
    GedcomX = require('../../');

describe('AtomFeed', function(){
  
  var json = {
    authors: [
      {
        name: 'author',
        email: 'author@email.com'
      }  
    ],
    contributors: [
      {
        name: 'contributor',
        email: 'contributor@email.com'
      }  
    ],
    generator: {
      uri: 'uri',
      version: 'version',
      value: 'value'
    },
    icon: 'icon',
    id: 'id',
    results: 5,
    links: {
      rel: {
        href: 'href'
      }
    },
    logo: 'logo',
    rights: 'rights',
    subtitle: 'subtitle',
    title: 'title',
    updated: 123456789,
    entries: [
      {
        title: 'Entry title',
        summary: 'Summary'
      }
    ],
    facets: [
      {
        type: 'fieldType'
      }
    ]
  };
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.AtomFeed(), GedcomX.AtomFeed, 'An instance of AtomFeed is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.AtomFeed(), GedcomX.AtomFeed, 'An instance of AtomFeed is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    tests(GedcomX.AtomFeed(json));
  });
  
  it('Build', function(){
    tests(GedcomX.AtomFeed()
      .addAuthor(
        GedcomX.AtomPerson()
          .setName('author')
          .setEmail('author@email.com')
      )
      .addContributor(
        GedcomX.AtomPerson()
          .setName('contributor')
          .setEmail('contributor@email.com')
      )
      .setGenerator(
        GedcomX.AtomGenerator()
          .setUri('uri')
          .setVersion('version')
          .setValue('value')
      )
      .setIcon('icon')
      .setId('id')
      .setResults(5)
      .addLink(
        GedcomX.Link()
          .setRel('rel')
          .setHref('href')
      )
      .setLogo('logo')
      .setRights('rights')
      .setSubtitle('subtitle')
      .setTitle('title')
      .setUpdated(123456789)
      .addEntry(
        GedcomX.AtomEntry()
          .setTitle('Entry title')
          .setSummary('Summary')
      )
      .addFacet(
        GedcomX.Field().setType('fieldType')
      )
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.AtomFeed(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.AtomFeed();
    var obj2 = GedcomX.AtomFeed(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function tests(feed){
  assert.equal(feed.getAuthors().length, 1);
  var author = feed.getAuthors()[0];
  assert.equal(author.getName(), 'author');
  assert.equal(author.getEmail(), 'author@email.com');
  
  assert.equal(feed.getContributors().length, 1);
  var contributor = feed.getContributors()[0];
  assert.equal(contributor.getName(), 'contributor');
  assert.equal(contributor.getEmail(), 'contributor@email.com');
  
  var generator = feed.getGenerator();
  assert.equal(generator.getUri(), 'uri');
  assert.equal(generator.getVersion(), 'version');
  assert.equal(generator.getValue(), 'value');
  
  assert.equal(feed.getIcon(), 'icon');
  assert.equal(feed.getId(), 'id');
  assert.equal(feed.getLinks().length, 1);
  assert.equal(feed.getLink('rel').getHref(), 'href');
  assert.equal(feed.getLogo(), 'logo');
  assert.equal(feed.getRights(), 'rights');
  assert.equal(feed.getSubtitle(), 'subtitle');
  assert.equal(feed.getTitle(), 'title');
  assert.equal(feed.getUpdated().getTime(), 123456789);

  var entry = feed.getEntries()[0];
  assert.equal(entry.getTitle(), 'Entry title');
  assert.equal(entry.getSummary(), 'Summary');
  
  var field = feed.getFacets()[0];
  assert.equal(field.getType(), 'fieldType');
}