// Enable RS Extensions so that we can test them
var GedcomX = require('../../');
GedcomX.enableRsExtensions();

// Call it again to test that it doesn't break/change anything
GedcomX.enableRsExtensions();