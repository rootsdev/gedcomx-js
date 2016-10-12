/**
 * Setup Gedcom X Atom Extensions
 */
module.exports = function(GedcomX){
  
  // Add new classes
  require('./AtomCategory')(GedcomX);
  require('./AtomContent')(GedcomX);
  
};