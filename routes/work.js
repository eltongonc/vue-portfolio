var express = require("express");

var list = require("../allwork");

var router = express.Router();

/****************
** Work page.
*****************/
router.get("/", function(req, res) {
    res.render("work-overview", { title: "Work",pageTitle: "Work", list, work_active : true, work: list });
});

router.get("/:project", function(req, res) {
    var work = list.filter(function(item){
        return item.link() === req.originalUrl;
    });
    res.render("project", work[0]);
});

module.exports = router;
