var express = require('express');
var router = express.Router();

/****************
** Contact page.
*****************/
router.get('/', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
