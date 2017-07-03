var index = require("./home"),
    about = require("./about"),
    // api = require("./api"),
    work = require("./work"),
    // contact = require("./contact"),
    blog = require("./blog");


module.exports = {
    "/": index,
    // "/api": api,
    "/about": about,
    "/work": work,
    "/blog": blog
};
