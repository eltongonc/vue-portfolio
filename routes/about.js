var express = require("express");

var router = express.Router();

/****************
** About page.
*****************/
router.get("/", function(req, res) {
    res.render("construction", { title: "About" , about_active: true });
});

module.exports = router;
