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
        connection.query("SELECT * FROM school WHERE rollno <5", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
  });
});