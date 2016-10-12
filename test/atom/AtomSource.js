var assert = require('chai').assert,
    GedcomX = require('../../');

describe('AtomSource', function(){
  
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
    updated: 123456789
  };
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.AtomSource(), GedcomX.AtomSource, 'An instance of AtomSource is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.AtomSource(), GedcomX.AtomSource, 'An instance of AtomSource is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    tests(GedcomX.AtomSource(json));
  });
  
  it('Build', function(){
    tests(GedcomX.AtomSource()
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
    );
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.AtomSource(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.AtomSource();
    var obj2 = GedcomX.AtomSource(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function tests(source){
  assert.equal(source.getAuthors().length, 1);
  var author = source.getAuthors()[0];
  assert.equal(author.getName(), 'author');
  assert.equal(author.getEmail(), 'author@email.com');
  
  assert.equal(source.getContributors().length, 1);
  var contributor = source.getContributors()[0];
  assert.equal(contributor.getName(), 'contributor');
  assert.equal(contributor.getEmail(), 'contributor@email.com');
  
  assert.equal(source.getCategories().length, 1);
  var category = source.getCategories()[0];
  assert.equal(category.getScheme(), 'scheme');
  assert.equal(category.getTerm(), 'term');
  assert.equal(category.getLabel(), 'label');
  
  var generator = source.getGenerator();
  assert.equal(generator.getUri(), 'uri');
  assert.equal(generator.getVersion(), 'version');
  assert.equal(generator.getValue(), 'value');
  
  assert.equal(source.getIcon(), 'icon');
  assert.equal(source.getId(), 'id');
  assert.equal(source.getLinks().length, 1);
  assert.equal(source.getLink('rel').getHref(), 'href');
  assert.equal(source.getLogo(), 'logo');
  assert.equal(source.getRights(), 'rights');
  assert.equal(source.getSubtitle(), 'subtitle');
  assert.equal(source.getTitle(), 'title');
  assert.equal(source.getUpdated().getTime(), 123456789);
}