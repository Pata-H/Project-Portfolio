
var path = require("path");
var express = require("express");
var app = express();
module.exports = function(app) {
  // ---------------------------------------------------------------------------
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  app.get("/JSTest", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/JSTest.html"));
  });
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/contact.html"));
  });
  
  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/portfolio.html"));
  });

  // If no matching route is found default to home
    app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

};