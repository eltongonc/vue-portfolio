var express = require("express");
var path = require("path");
// var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs  = require("express-handlebars");

var routes = require("./routes/index");

var app = express(),
// port is in single quotes to trigger the esLinter
// so I wont forget to change it to 80 for Digital Oceon
    port = 80;

// view engine setup
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    partialsDir: ["views/partials/"]
}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

// app.use(favicon(__dirname + "/public/img/favicon.ico"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Create all routes
for (var x in routes) {
    app.use(x, routes[x]);
}


// production error handler
// no stacktraces leaked to user
app.use(function(req, res) {
    var err = new Error("Not Found");
    err.status = 404;
    res.status(err.status || 500);
    res.render("error", {
        message: req.path + " not found",
        error: {},
    });
});



app.listen(port);
