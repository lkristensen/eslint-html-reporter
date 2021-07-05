/**
 * @fileoverview ESLint HTML reporter
 */

var LintReporter = require('./src/js/lint-reporter');
var templateUtils = require('./src/js/template-utils');


module.exports = function(results) {
  var lintReporter = new LintReporter();
  var data = lintReporter.runReport(results, true, false);

  return templateUtils.applyTemplates(data);
};
