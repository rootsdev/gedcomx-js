var ExtensibleData = require('./ExtensibleData'),
    Attribution = require('./Attribution'),
    ResourceReference = require('./ResourceReference'),
    Note = require('./Note'),
    SourceReference = require('./SourceReference');

/**
 * An abstract concept for a basic genealogical data item.
 * 
 * @constructor
 * @param {Object} [json]
 */
var Conclusion = function(json){
  
  // Protect against forgetting the new keyword when calling the constructor
  if(!(this instanceof Conclusion)){
    return new Conclusion(json);
  }
  
  ExtensibleData.call(this, json);
  
  if(json){
    this.setAttribution(json.attribution);
    this.setAnalysis(json.analysis);
    this.setConfidence(json.confidence);
    this.setLang(json.lang);
    this.setNotes(json.notes);
    this.setSources(json.sources);
  }
};

Conclusion.prototype = Object.create(ExtensibleData.prototype);

/**
 * Get the attribution.
 * 
 * @returns {Attribution}
 */
Conclusion.prototype.getAttribution = function(){
  return this.attribution;
};

/**
 * Set the attribution
 * 
 * @param {Object|Attribution} attribution
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.setAttribution = function(attribution){
  if(attribution){
    this.attribution = new Attribution(attribution);
  }
  return this;
};

/**
 * Get analysis.
 * 
 * @returns {ResourceReference} analysis
 */
Conclusion.prototype.getAnalysis = function(){
  return this.analysis;
};

/**
 * Set the analysis
 * 
 * @param {Object|ResourceReference} analysis
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.setAnalysis = function(analysis){
  if(analysis){
    this.analysis = new ResourceReference(analysis);
  }
  return this;
};

/**
 * Get the confidence.
 * 
 * @returns {String} confidence
 */
Conclusion.prototype.getConfidence = function(){
  return this.confidence;
};

/**
 * Set the confidence.
 * 
 * @param {String} confidence
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.setConfidence = function(confidence){
  this.confidence = confidence;
  return this;
};

/**
 * Get the language identifier.
 * 
 * @returns {String} lang
 */
Conclusion.prototype.getLang = function(){
  return this.lang;
};

/**
 * Set the language identifier.
 * 
 * @param {String} lang
 * @returns {Conclusion} This instance.
 */
Conclusion.prototype.setLang = function(lang){
  this.lang = lang;
  return this;
};

/**
 * Get the notes
 * 
 * @returns {Note[]} notes
 */
Conclusion.prototype.getNotes = function(){
  return this.notes || [];
};

/**
 * Set the notes
 * 
 * @param {Object[]|Note[]} notes
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.setNotes = function(notes){
  if(notes){
    var conclusion = this;
    conclusion.notes = [];
    notes.forEach(function(note){
      conclusion.addNote(note);
    });
  }
  return this;
};

/**
 * Add a note
 * 
 * @param {Object|Note} note
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.addNote = function(note){
  if(note){
    if(!Array.isArray(this.notes)){
      this.notes = [];
    }
    this.notes.push(new Note(note));
  }
  return this;
};

/**
 * Get the sources
 * 
 * @returns {SourceReference[]}
 */
Conclusion.prototype.getSources = function(){
  return this.sources || [];
};

/**
 * Set the sources
 * 
 * @param {Object[]|SourceReference[]} sources
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.setSources = function(sources){
  if(sources){
    var conclusion = this;
    conclusion.sources = [];
    sources.forEach(function(source){
      conclusion.addSource(source);
    });
  }
  return this;
};

/**
 * Add a source
 * 
 * @param {SourceReference} source
 * @returns {Conclusion} This instance
 */
Conclusion.prototype.addSource = function(source){
  if(source){
    if(!Array.isArray(this.sources)){
      this.sources = [];
    }
    this.sources.push(new SourceReference(source));
  }
  return this;
};

/**
 * Export the object as JSON
 * 
 * @return {Object} JSON object
 */
Conclusion.prototype.toJSON = function(){
  var json = ExtensibleData.prototype.toJSON.call(this);
  
  if(this.lang){
    json.lang = this.lang;
  }
  
  if(this.confidence){
    json.confidence = this.confidence;
  }
  
  if(this.analysis){
    json.analysis = this.analysis.toJSON();
  }
  
  if(this.attribution){
    json.attribution = this.attribution.toJSON();
  }
  
  if(this.sources){
    json.sources = this.sources.map(function(source){
      return source.toJSON();
    });
  }
  
  if(this.notes){
    json.notes = this.notes.map(function(note){
      return note.toJSON();
    });
  }
  
  return json;
};

module.exports = Conclusion;