"use strict"

var compileBoundsSearch = require('./compile');

module.exports = {
  ge: new Function(compileBoundsSearch(">=", false,  "GE"))(),
  gt: new Function(compileBoundsSearch(">",  false,  "GT"))(),
  lt: new Function(compileBoundsSearch("<",  true,   "LT"))(),
  le: new Function(compileBoundsSearch("<=", true,   "LE"))(),
  eq: new Function(compileBoundsSearch("-",  true,   "EQ", true))()
}
