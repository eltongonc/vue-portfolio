const fs = require('fs');

fs.readFile('./index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data.split('</head>'));
});