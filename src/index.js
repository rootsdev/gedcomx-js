/**
 * A GEDCOM X document.
 * 
 * @constructor
 * @param {Object} [json]
 */
var GedcomX = function(json){
  return new GedcomX.Root(json);
};

// Export early so that circular dependencies work properly
module.exports = GedcomX;

// Expose utils so that extension libraries can use them
GedcomX.utils = require('./utils');

// Expose all classes. They have to be included in order so that the inheritance
// hierarchy is properly assembled.
GedcomX.Base = require('./Base');
GedcomX.ExtensibleData = require('./core/ExtensibleData');
GedcomX.Conclusion = require('./core/Conclusion');
GedcomX.Subject = require('./core/Subject');
GedcomX.ResourceReference = require('./core/ResourceReference');

// The rest are listed alphabetically because they either extend Base or extend
// one of the classes included above.
GedcomX.Address = require('./core/Address');
GedcomX.Agent = require('./core/Agent');
GedcomX.Attribution = require('./core/Attribution');
GedcomX.Coverage = require('./core/Coverage');
GedcomX.Date = require('./core/Date');
GedcomX.Document = require('./core/Document');
GedcomX.Event = require('./core/Event');
GedcomX.EventRole = require('./core/EventRole');
GedcomX.EvidenceReference = require('./core/EvidenceReference');
GedcomX.Fact = require('./core/Fact');
GedcomX.Gender = require('./core/Gender');
GedcomX.Identifiers = require('./core/Identifiers');
GedcomX.Name = require('./core/Name');
GedcomX.NameForm = require('./core/NameForm');
GedcomX.NamePart = require('./core/NamePart');
GedcomX.Note = require('./core/Note');
GedcomX.OnlineAccount = require('./core/OnlineAccount');
GedcomX.Person = require('./core/Person');
GedcomX.PlaceDescription = require('./core/PlaceDescription');
GedcomX.PlaceReference = require('./core/PlaceReference');
GedcomX.Qualifier = require('./core/Qualifier');
GedcomX.Relationship = require('./core/Relationship');
GedcomX.Root = require('./core/Root');
GedcomX.SourceCitation = require('./core/SourceCitation');
GedcomX.SourceDescription = require('./core/SourceDescription');
GedcomX.SourceReference = require('./core/SourceReference');
GedcomX.TextValue = require('./core/TextValue');

/**
 * Enable a set of extensions
 * 
 * @param {Function} extensions
 */
GedcomX.addExtensions = function(extensions){
  if(typeof extensions === 'function'){
    extensions(this);
  }
};

/**
 * Enable the GedcomX RS Extensions
 */
GedcomX.enableRsExtensions = function(){
  this.addExtensions(require('./rs'));
};

/**
 * Enable the GedcomX Records Extensions
 */
GedcomX.enableRecordsExtensions = function(){
  this.addExtensions(require('./records'));
};

/**
 * Enable the GedcomX Atom Extensions. This depends on the RS extensions
 * so those will be enabled too.
 */
GedcomX.enableAtomExtensions = function(){
  this.enableRsExtensions(); // depends on RS extensions
  this.enableRecordsExtensions(); // depend on Record extensions
  this.addExtensions(require('./atom'));
};