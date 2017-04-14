var express = require('express');
var router = express.Router();

/****************
** Work page.
*****************/
router.get('/', function(req, res) {
  res.render('work', { title: 'Work' });
});
router.get('/:project', function(req, res) {
  res.render('project', { title: 'Work' });
});

module.exports = router;
