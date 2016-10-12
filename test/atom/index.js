// Enable Atom Extensions so that we can test them
var GedcomX = require('../../');
GedcomX.enableAtomExtensions();

// Call it again to test that it doesn't break/change anything
GedcomX.enableAtomExtensions();