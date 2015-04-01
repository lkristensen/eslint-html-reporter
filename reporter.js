/**
 * @fileoverview ESLint HTML reporter
 * @author Evangelia Dendramis
 */
"use strict";

var util = require("./util");


//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------
module.exports = function(results) {

  var data = util.summarizeData(results, true);

  return util.applyTemplates(data);
};
