var chalk = require('chalk');

function filterMaker(style) {
  return function(input) {
    input = input || '';
    return chalk[style](input);
  };
};

module.exports = function attachFilters(twig, loadedChalk) {
  chalk = loadedChalk || chalk;
  for (style in chalk.styles) {
    twig.extendFilter(style, filterMaker(style));
  }
};
