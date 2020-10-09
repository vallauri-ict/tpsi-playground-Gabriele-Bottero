var url = require('url');
var parsed = url.parse('http://www.google.com');
for(e in parsed) console.log('parsed url property');
console.log;