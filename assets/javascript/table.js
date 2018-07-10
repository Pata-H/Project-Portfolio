 var mysql = require('mysql');


 var mysql = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "break123out",
   database: "projectport"
});


mysql.connect(function(err) {   
   if (err) throw err;
   mysql.query("SELECT * FROM info", function (err, result, fields) {
     if (err) throw err;
     console.log(result); });
 


   
 });

 /* var infoDiv = document.getElementById("table");
  var infoText = document.createTextNode("Test!");
  infoDiv.appendChild(infoText); */ 