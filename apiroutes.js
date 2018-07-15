var connection = require("./config/connection.js");

module.exports = function(app) {
  app.get("/api/listData", function(req, res) {
    var dbQuery = "SELECT * FROM info";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
};