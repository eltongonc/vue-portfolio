var express = require("express");

var allWork = require("../allwork");

var router = express.Router();

/****************
** Home page.
*****************/
router.get("/", function(req, res) {
	var work = allWork.filter((item,index)=>{
		return index < 3?item:null
	})
    res.render("index", { title: "Home", work, home_active: true });
});

module.exports = router;
