var index = require("./home"),
    about = require("./about"),
    work = require("./work"),
    contact = require("./contact"),
    blog = require("./blog");


module.exports = {
    "/": index,
    "/about": about,
    "/work": work,
    "/contact": contact,
    "/blog": blog
};
