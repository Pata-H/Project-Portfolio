
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("/public"));

require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
