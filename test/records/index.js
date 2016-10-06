// Enable Records extensions so that we can test them
var GedcomX = require('../../');
GedcomX.enableRecordsExtensions();

// Call it again to test that it doesn't break/change anything
GedcomX.enableRecordsExtensions();