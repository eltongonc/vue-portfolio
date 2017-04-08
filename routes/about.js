var express = require('express');
var router = express.Router();

/****************
** About page.
*****************/
router.get('/', function(req, res) {
  res.render('index', { title: 'About' });
});

module.exports = router;
