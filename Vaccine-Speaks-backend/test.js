var mysql = require('mysql');
const fs=require('fs')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vaccine_data"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM plot", function (err, result, fields) {
    if (err) throw err;
    console.log(typeof(result))
    var result_json = JSON.stringify(result);
    fs.writeFile('user.json', result_json, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
    process.exit(1);
    
  });
})

});