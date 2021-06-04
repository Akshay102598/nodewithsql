const sql = require('mysql');
var connection=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "jr"
});

connection.connect((err)=>
{
    if(err)
        console.log(err);
    console.log('Connected...');
    connection.query("CREATE Table school (rollno Int(10),name VARCHAR(255),sub VARCHAR(255),marks INT(10) )", function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
});