var express = require('express');
var router = express.Router();

/****************
** Blog page.
*****************/
router.get('/', function(req, res) {
  res.render('blog', { title: 'Blog' });
});


module.exports = router;
