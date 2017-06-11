var express = require("express");

var allWork = require("../allwork");

var router = express.Router();

/****************
** Home page.
*****************/
router.get("/", function(req, res) {
    res.render("index", { title: "Home", work: allWork, home_active: true });
});

module.exports = router;
