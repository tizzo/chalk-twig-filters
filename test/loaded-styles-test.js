var Twig = require('twig');
var should = require('should');
var chalk = require('chalk');
var attachFilters = require('..');

describe('attach styles', function() {
  it('should create twig filters from chalk styles', function() {
    attachFilters(Twig);
    var template = Twig.twig({
      data: '{{ text | red | underline | bold }}'
    });
    var output = template.render({text: 'foo'});
    output.should.equal(chalk.red.underline.bold('foo'));
  });
});
