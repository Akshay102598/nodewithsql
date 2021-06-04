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
    var sql = "INSERT INTO school(rollno ,name ,sub ,marks ) VALUES ?";
    var values =[[1,'Akshay','Science',95],
    [2,'Suresh','History',80],
    [3,'Ramesh','Maths',65],
    [4,'Ganesh','English',90],
  
];
connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

});
