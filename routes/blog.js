var express = require("express");

var list = require("../blogposts.js"); // this belongs in a database
// list = list.reverse();

var router = express.Router();

/****************
** Blog page.
*****************/
router.get("/", function(req, res) {
    res.render("blog-overview", {title: "Blog", pageTitle: "Blog",list, blog_active : true });
});

router.post("/", function(req, res) {
	var searchQuery = req.body.search;
	var newList = list.filter(item=>
			(item.title.toLowercase().indexOf(searchQuery)  !== -1 ||
			item.content.toLowercase().indexOf(searchQuery) !== -1)
			? item : null
	)
    res.render("blog-overview", {title: "Blog", pageTitle: "This page is my playground",list: newList, blog_active : true, searchvalue: req.body.search });
});

router.get("/:post", function(req, res) {
	// list = list.reverse();
    var index = req.params.post;
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
