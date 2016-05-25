var ExtensibleData = require('./ExtensibleData'),
    Person = require('./Person'),
    Relationship = require('./Relationship'),
    SourceDescription = require('./SourceDescription'),
    Agent = require('./Agent'),
    Event = require('./Event'),
    Document = require('./Document'),
    PlaceDescription = require('./PlaceDescription'),
    Attribution = require('./Attribution');

/**
 * A GEDCOM X document.
 * 
 * @constructor
 * @param {Object} [json]
 */
var GedcomX = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof GedcomX)){
    return new GedcomX(json);
  }
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setPersons(json.persons);
    this.setRelationships(json.relationships);
    this.setSourceDescriptions(json.sourceDescriptions);
    this.setAgents(json.agents);
    this.setEvents(json.events);
    this.setDocuments(json.documents);
    this.setPlaces(json.places);
    this.setAttribution(json.attribution);
  }
};

GedcomX.prototype = Object.create(ExtensibleData.prototype);

/**
 * Get the persons
 * 
 * @returns {Person[]}
 */
GedcomX.prototype.getPersons = function(){
  return this.persons || [];
};

/**
 * Set the persons
 * 
 * @param {Person[]|Object[]} persons
 * @returns {GedcomX} This instance
 */
GedcomX.prototype.setPersons = function(persons){
  if(Array.isArray(persons)){
    var gedx = this;
    gedx.persons = [];
    persons.forEach(function(p){
      gedx.addPerson(p);
    });
  }
  return this;
};

/**
 * Add a person
 * 
 * @param {Person|Object}
 * @returns {GedcomX} This instance
 */
GedcomX.prototype.addPerson = function(person){
  if(person){
    if(!Array.isArray(this.persons)){
      this.persons = [];
    }
    this.persons.push(Person(person));
  }
  return this;
};

/**
 * Get the relationships
 * 
 * @returns {Relationship[]}
 */
GedcomX.prototype.getRelationships = function(){
  return this.relationships || [];
};

/**
 * Set the relationships
 * 
 * @param {Relationship[]|Object[]} relationships
 * @returns {GedcomX}
 */
GedcomX.prototype.setRelationships = function(relationships){
  if(Array.isArray(relationships)){
    var gedx = this;
    gedx.relationships = [];
    relationships.forEach(function(r){
      gedx.addRelationship(r);
    });
  }
  return this;
};

/**
 * Add a relationship
 * 
 * @param {Relationship|Object} relationship
 * @returns {GedcomX}
 */
GedcomX.prototype.addRelationship = function(relationship){
  if(relationship){
    if(!Array.isArray(this.relationships)){
      this.relationships = [];
    }
    this.relationships.push(Relationship(relationship));
  }
  return this;
};

/**
 * Get the source descriptions
 * 
 * @returns {SourceDescription[]}
 */
GedcomX.prototype.getSourceDescriptions = function(){
  return this.sourceDescriptions || [];
};

/**
 * Set the source descriptions
 * 
 * @param {SourceDescription[]|Object[]} sourceDescriptions
 * @returns {GedcomX}
 */
GedcomX.prototype.setSourceDescriptions = function(sourceDescriptions){
  if(Array.isArray(sourceDescriptions)){
    var gedx = this;
    gedx.sourceDescriptions = [];
    sourceDescriptions.forEach(function(s){
      gedx.addSourceDescription(s);
    });
  }
  return this;
};

/**
 * Add a ource description
 * 
 * @param {SourceDescription|Object} sourceDescription
 * @returns {GedcomX}
 */
GedcomX.prototype.addSourceDescription = function(sourceDescription){
  if(sourceDescription){
    if(!Array.isArray(this.sourceDescriptions)){
      this.sourceDescriptions = [];
    }
    this.sourceDescriptions.push(SourceDescription(sourceDescription));
  }
  return this;
};

/**
 * Get the agents
 * 
 * @returns {Agent[]}
 */
GedcomX.prototype.getAgents = function(){
  return this.agents || [];
};

/**
 * Set the agents
 * 
 * @param {Agent[]|Object[]} agents
 * @returns {GedcomX}
 */
GedcomX.prototype.setAgents = function(agents){
  if(Array.isArray(agents)){
    var gedx = this;
    gedx.agents = [];
    agents.forEach(function(a){
      gedx.addAgent(a);
    });
  }
  return this;
};

/**
 * Add an agent
 * 
 * @param {Agent|Object}
 * @returns {GedcomX}
 */
GedcomX.prototype.addAgent = function(agent){
  if(agent){
    if(!Array.isArray(this.agents)){
      this.agents = [];
    }
    this.agents.push(Agent(agent));
  }
  return this;
};

/**
 * Get events
 * 
 * @returns {Event[]}
 */
GedcomX.prototype.getEvents = function(){
  return this.events || [];
};

/**
 * Set events
 * 
 * @param {Event[]|Object[]} events
 * @returns {GedcomX}
 */
GedcomX.prototype.setEvents = function(events){
  if(Array.isArray(events)){
    var gedx = this;
    gedx.events = [];
    events.forEach(function(event){
      gedx.addEvent(event);
    });
  }
  return this;
};

/**
 * Add an event
 * 
 * @param {Event|Object} event
 * @returns {GedcomX}
 */
GedcomX.prototype.addEvent = function(event){
  if(event){
    if(!Array.isArray(this.events)){
      this.events = [];
    }
    this.events.push(Event(event));
  }
  return this;
};

/**
 * Get the documents
 * 
 * @returns {Document[]}
 */
GedcomX.prototype.getDocuments = function(){
  return this.documents || [];
};

/**
 * Set the documents
 * 
 * @param {Documents[]|Object[]} documents
 * @returns {GedcomX}
 */
GedcomX.prototype.setDocuments = function(documents){
  if(Array.isArray(documents)){
    var gedx = this;
    gedx.documents = [];
    documents.forEach(function(doc){
      gedx.addDocument(doc);
    });
  }
  return this;
};

/**
 * Add a document
 * 
 * @param {Document|Object} doc
 * @returns {GedcomX}
 */
GedcomX.prototype.addDocument = function(doc){
  if(doc){
    if(!Array.isArray(this.documents)){
      this.documents = [];
    }
    this.documents.push(Document(doc));
  }
  return this;
};

/**
 * Get places
 * 
 * @returns {PlaceDescription[]}
 */
GedcomX.prototype.getPlaces = function(){
  return this.places || [];
};

/**
 * Set the places
 * 
 * @param {PlaceDescription[]|Object} places
 * @returns {GedcomX}
 */
GedcomX.prototype.setPlaces = function(places){
  if(Array.isArray(places)){
    var gedx = this;
    gedx.places = [];
    places.forEach(function(place){
      gedx.addPlace(place);
    });
  }
  return this;
};

/**
 * Add a place
 * 
 * @param {PlaceDescription} place
 * @returns {GedcomX}
 */
GedcomX.prototype.addPlace = function(place){
  if(place){
    if(!Array.isArray(this.places)){
      this.places = [];
    }
    this.places.push(PlaceDescription(place));
  }
  return this;
};

/**
 * Get attritbution
 * 
 * @returns {Attribution}
 */
GedcomX.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set attribution
 * 
 * @param {Attribution} attribution
 * @returns {GedcomX}
 */
GedcomX.prototype.setAttribution = function(attribution){
  if(attribution){
    this.attribution = Attribution(attribution);
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
GedcomX.prototype.toJSON = function(){
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.persons){
    json.persons = this.persons.map(function(p){
      return p.toJSON();
    });
  }
  
  if(this.relationships){
    json.relationships = this.relationships.map(function(r){
      return r.toJSON();
    });
  }
  
  if(this.sourceDescriptions){
    json.sourceDescriptions = this.sourceDescriptions.map(function(s){
      return s.toJSON();
    });
  }
  
  if(this.agents){
    json.agents = this.agents.map(function(a){
      return a.toJSON();
    });
  }
  
  if(this.events){
    json.events = this.events.map(function(e){
      return e.toJSON();
    });
  }
  
  if(this.documents){
    json.documents = this.documents.map(function(d){
      return d.toJSON();
    });
  }
  
  if(this.places){
    json.places = this.places.map(function(p){
      return p.toJSON();
    });
  }
  
  if(this.attribution){
    json.attribution = this.attribution.toJSON();
  }
  
  return json;
};

// Expose all classes
GedcomX.Address = require('./Address');
GedcomX.Agent = Agent;
GedcomX.Attribution = Attribution;
GedcomX.Conclusion = require('./Conclusion');
GedcomX.Coverage = require('./Coverage');
GedcomX.Date = require('./Date');
GedcomX.Document = Document;
GedcomX.Event = Event;
GedcomX.EventRole = require('./EventRole');
GedcomX.EvidenceReference = require('./EvidenceReference');
GedcomX.ExtensibleData = ExtensibleData;
GedcomX.Fact = require('./Fact');
GedcomX.Gender = require('./Gender');
GedcomX.Identifiers = require('./Identifiers');
GedcomX.Name = require('./Name');
GedcomX.NameForm = require('./NameForm');
GedcomX.NamePart = require('./NamePart');
GedcomX.Note = require('./Note');
GedcomX.OnlineAccount = require('./OnlineAccount');
GedcomX.Person = Person;
GedcomX.PlaceDescription = PlaceDescription;
GedcomX.PlaceReference = require('./PlaceReference');
GedcomX.Qualifier = require('./Qualifier');
GedcomX.Relationship = Relationship;
GedcomX.ResourceReference = require('./ResourceReference');
GedcomX.SourceCitation = require('./SourceCitation');
GedcomX.SourceDescription = SourceDescription;
GedcomX.SourceReference = require('./SourceReference');
GedcomX.Subject = require('./Subject');
GedcomX.TextValue = require('./TextValue');

module.exports = GedcomX;