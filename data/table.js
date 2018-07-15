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
     var portData = result;
     console.log(portData);
 
 module.exports = portData;});
  
 });

