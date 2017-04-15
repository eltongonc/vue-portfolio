var express = require('express');
var router = express.Router();
var list = require("../allWork");

/****************
** Work page.
*****************/
router.get('/', function(req, res) {
  res.render('overview', { list });
});
router.get('/:project', function(req, res) {
  res.render('project', { title: 'Work' });
});

module.exports = router;
