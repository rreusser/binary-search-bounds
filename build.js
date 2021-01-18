"use strict"

var fs = require('fs');
var compileBoundsSearch = require('./compile');

var cases = {
  ge: compileBoundsSearch(">=", false,  "GE"),
  gt: compileBoundsSearch(">",  false,  "GT"),
  lt: compileBoundsSearch("<",  true,   "LT"),
  le: compileBoundsSearch("<=", true,   "LE"),
  eq: compileBoundsSearch("-",  true,   "EQ", true)
};

var keys = Object.keys(cases);

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  var code = cases[key];
  code = 'module.exports = (function () {' + code + '})()';
  fs.writeFileSync(key + '.js', code);
}
