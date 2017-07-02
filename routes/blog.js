var express = require("express");

var list = require("../blogposts.js"); // this belongs in a database

var router = express.Router();

/****************
** Blog page.
*****************/
router.get("/", function(req, res) {
    res.render("blog-overview", {title: "Blog", pageTitle: "This page is my playground",list, blog_active : true });
});

router.get("/:post", function(req, res) {
    var index = req.params.post - 1;
    var post = {
		pageTitle: "Blog",
        blog_active : true,
		title: list[index].title,
        day: list[index].date.day,
        month: list[index].date.month,
        fullDate: list[index].date.full,
        content: list[index].content,
        image: list[index].image,
		author: list[index].author
    };
    res.render("blog-post", post);
});


module.exports = router;
