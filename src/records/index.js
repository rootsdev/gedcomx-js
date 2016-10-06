/**
 * Setup Gedcom X Records Extensions
 */
module.exports = function(GedcomX){
  
  // Add new classes
  require('./FieldValueDescriptor')(GedcomX);
  require('./FieldDescriptor')(GedcomX);
  
  // Extend existing classes
};