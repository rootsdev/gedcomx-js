/**
 * Setup Gedcom X RS Extensions
 */
module.exports = function(GedcomX){
  
  // Add new classes
  require('./Link')(GedcomX);
  require('./Links')(GedcomX);
  
  // Extend existing classes
  require('./ExtensibleData')(GedcomX);
};