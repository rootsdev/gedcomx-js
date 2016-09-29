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

// Expose all classes. ExtensibleData has to be first because many classes
// extend it. Since dependencies are cyclical, they will require GedcomX
// immediately so they can get ExtensibleData when setting up their prototype.
// We also have to make sure any other inheritance heirarchy is assembled in order.
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