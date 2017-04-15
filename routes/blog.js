var express = require('express');
var router = express.Router();
// this belongs in a database
var list = require("../blogposts.js");

/****************
** Blog page.
*****************/

router.get('/', function(req, res) {
  res.render('overview', {list});
});
router.get('/:post', function(req, res) {
    var index = req.params.post - 1;
    var post = {
        title: list[index].title,
        day: list[index].date.day,
        month: list[index].date.month,
        fullDate: list[index].date.full,
        content: list[index].content,
        image: "https://unsplash.it/1080/1920?random"
    };
  res.render('blog-post', post);
});


module.exports = router;
