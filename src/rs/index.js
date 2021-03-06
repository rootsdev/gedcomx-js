/**
 * Setup Gedcom X RS Extensions
 */
module.exports = function(GedcomX){
  
  // Add new classes
  require('./Link')(GedcomX);
  require('./Links')(GedcomX);
  require('./FamilyView')(GedcomX);
  require('./DisplayProperties')(GedcomX);
  require('./PlaceDisplayProperties')(GedcomX);
  
  // Extend existing classes
  require('./ExtensibleData')(GedcomX);
  require('./Date')(GedcomX);
  require('./PlaceReference')(GedcomX);
  require('./Name')(GedcomX);
  require('./Person')(GedcomX);
  require('./ResourceReference')(GedcomX);
  require('./Conclusion')(GedcomX);
  require('./SourceDescription')(GedcomX);
  require('./PlaceDescription')(GedcomX);
};