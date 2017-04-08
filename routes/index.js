var index = require('./home')
    , about = require("./about")
    , work = require("./work")
    , contact = require("./contact");


module.exports = {
    "/": index,
    "/about": about,
    "/work": work,
    "/contact": contact
};
