var express = require("express");
var path = require("path");
// var favicon = require("serve-favicon");
var bodyParser = require("body-parser");
var exphbs  = require("express-handlebars");

var routes = require("./routes/index");

// process.env.PORT = 3000

var app = express(),
    port = process.env.PORT || 80;

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    partialsDir: ["views/partials/"]
}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

// app.use(favicon(__dirname + "/public/img/favicon.ico"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
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



app.listen(process.env.port, function(){
	console.log('App running on port'+ this.address().port);
});
