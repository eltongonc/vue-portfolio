var express = require('express');
var router = express.Router();

/****************
** Work page.
*****************/
router.get('/', function(req, res) {
  res.render('index', { title: 'Work' });
});

module.exports = router;
