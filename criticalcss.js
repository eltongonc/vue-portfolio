var critical = require('critical');
var path = require('path');

critical.generate({
    base: path.resolve(__dirname, 'dist/'),
    // overwrite default options
    src: 'index.html',
    dest: 'index.html',
    inline: true,
    minify: false,
    extract: false,
    width: 375,
    height: 565,
    penthouse: {
      blockJSRequests: false,
    }
});
