# Chalk Twig Filters
[![Build Status](https://travis-ci.org/tizzo/chalk-twig-filters.svg?branch=master)](https://travis-ci.org/tizzo/chalk-twig-filters)
[![Coverage Status](https://img.shields.io/coveralls/tizzo/chalk-twig-filters.svg)](https://coveralls.io/r/tizzo/chalk-twig-filters)

Adds all configured [chalk](https://www.npmjs.org/package/chalk) styles (sometimes
referred to as themes) as [twig.js](https://www.npmjs.org/package/twig) [filters](http://twig.sensiolabs.org/doc/tags/filter.html).

## Usage

### Basic usage:

````javascript
var Twig = require('twig');
require('chalk-twig-filters')(Twig);
````

That's it! Now you can use twig to render colored text for the console like so:

````javascript
var Twig = require('twig');
require('./index')(Twig);
var someObject = {
  message: 'something wicked this way comes',
  date: new Date().getTime(),
};
var template = Twig.twig({data: '{{ date | date("m/d/Y h:m:s") | blue | underline}}: {{ message | cyan }}'});
console.log(template.render(someObject));
````

Advanced usage:

If you're doing anything clever like custom themes in chalk you can hand in the chalk instance to use.  All styles should be automatically detected and filterified dynamically. All you have to do is hand in chalk as a second argument.

````javascript
var Twig = require('twig');
var chalk = require('chalk');
// Configure chalk, add some theme combo, etc...
require('chalk-twig-filters')(Twig, chalk);
````
