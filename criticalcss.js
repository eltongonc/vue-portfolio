var critical = require('critical');
var path = require('path');

critical.generate({
    base: path.resolve(__dirname, 'dist/'),
    // ignore CSS rules
    ignore: ['font-face',/some-regexp/],
    // overwrite default options
    src: 'index.html',
    dest: 'index.html',
    inline: true,
    minify: false,
    extract: true,
    width: 375,
    height: 565,
    penthouse: {
      blockJSRequests: false,
    }
});
