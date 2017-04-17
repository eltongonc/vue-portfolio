var express = require("express");

var list = require("../allwork");

var router = express.Router();

/****************
** Work page.
*****************/
router.get("/", function(req, res) {
    res.render("overview", { pageTitle: "Work", list });
});
router.get("/:project", function(req, res) {
    res.render("project", { title: "Work" });
});

module.exports = router;
