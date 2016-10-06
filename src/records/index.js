/**
 * Setup Gedcom X Records Extensions
 */
module.exports = function(GedcomX){
  
  // Add new classes
  require('./FieldValueDescriptor')(GedcomX);
  require('./FieldDescriptor')(GedcomX);
  require('./RecordDescriptor')(GedcomX);
  require('./FieldValue')(GedcomX);
  require('./Field')(GedcomX);
  require('./CollectionContent')(GedcomX);
  
  // Extend existing classes
  require('./Root')(GedcomX);
  require('./ExtensibleData')(GedcomX);
};