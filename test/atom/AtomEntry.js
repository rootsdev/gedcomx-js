var assert = require('chai').assert,
    GedcomX = require('../../');

describe('AtomEntry', function(){
  
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
    categories: [
      {
        scheme: 'scheme',
        term: 'term',
        label: 'label'
      }
    ],
    generator: {
      uri: 'uri',
      version: 'version',
      value: 'value'
    },
    icon: 'icon',
    id: 'id',
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
    content: {
      gedcomx: {
        description: '#root'
      }
    },
    confidence: 4,
    published: 123456780,
    source: {
      logo: 'logo',
      rights: 'rights',
      subtitle: 'subtitle'
    },
    summary: 'summary',
    score: 122.32
  };
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.AtomEntry(), GedcomX.AtomEntry, 'An instance of AtomEntry is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.AtomEntry(), GedcomX.AtomEntry, 'An instance of AtomEntry is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    tests(GedcomX.AtomEntry(json));
  });
  
  it('Build', function(){
    tests(GedcomX.AtomEntry()
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
      .addCategory(
        GedcomX.AtomCategory()
          .setScheme('scheme')
          .setTerm('term')
          .setLabel('label')
      )
      .setGenerator(
        GedcomX.AtomGenerator()
          .setUri('uri')
          .setVersion('version')
          .setValue('value')
      )
      .setIcon('icon')
      .setId('id')
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
      .setConfidence(4)
      .setPublished(123456780)
      .setSummary('summary')
      .setScore(122.32)
      .setContent({
        gedcomx: {
          description: '#root'
        }
      })
      .setSource({
        logo: 'logo',
        rights: 'rights',
        subtitle: 'subtitle'
      })
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.AtomEntry(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.AtomEntry();
    var obj2 = GedcomX.AtomEntry(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function tests(entry){
  assert.equal(entry.getAuthors().length, 1);
  var author = entry.getAuthors()[0];
  assert.equal(author.getName(), 'author');
  assert.equal(author.getEmail(), 'author@email.com');
  
  assert.equal(entry.getContributors().length, 1);
  var contributor = entry.getContributors()[0];
  assert.equal(contributor.getName(), 'contributor');
  assert.equal(contributor.getEmail(), 'contributor@email.com');
  
  assert.equal(entry.getCategories().length, 1);
  var category = entry.getCategories()[0];
  assert.equal(category.getScheme(), 'scheme');
  assert.equal(category.getTerm(), 'term');
  assert.equal(category.getLabel(), 'label');
  
  var generator = entry.getGenerator();
  assert.equal(generator.getUri(), 'uri');
  assert.equal(generator.getVersion(), 'version');
  assert.equal(generator.getValue(), 'value');
  
  assert.equal(entry.getIcon(), 'icon');
  assert.equal(entry.getId(), 'id');
  assert.equal(entry.getLinks().length, 1);
  assert.equal(entry.getLink('rel').getHref(), 'href');
  assert.equal(entry.getLogo(), 'logo');
  assert.equal(entry.getRights(), 'rights');
  assert.equal(entry.getSubtitle(), 'subtitle');
  assert.equal(entry.getTitle(), 'title');
  assert.equal(entry.getUpdated().getTime(), 123456789);
  assert.equal(entry.getConfidence(), 4);
  assert.equal(entry.getPublished().getTime(), 123456780);
  assert.equal(entry.getSummary(), 'summary');
  assert.equal(entry.getScore(), 122.32);
  
  var content = entry.getContent();
  assert.equal(content.getGedcomX().getDescription(), '#root');
  
  var source = entry.getSource();
  assert.equal(source.getLogo(), 'logo');
  assert.equal(source.getRights(), 'rights');
  assert.equal(source.getSubtitle(), 'subtitle');
}