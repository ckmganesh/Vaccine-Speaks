var MongoClient = require('mongodb').MongoClient;
var url =  "mongodb+srv://avenger:qWXWhAxJyX0b3VV8@cluster0.gxstw.mongodb.net/vaccinespeak?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("vaccine");
  print(db)
});

//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
  
