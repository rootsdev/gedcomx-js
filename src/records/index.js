/**
 * Setup Gedcom X Records Extensions
 */
module.exports = function(GedcomX){
  
  // Add new classes
  require('./FieldValueDescriptor')(GedcomX);
  
  // Extend existing classes
};