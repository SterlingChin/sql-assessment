var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

//Need to enter username and password for your database
var connString = "postgres://sterling.chin@gmail.com/localhost/assessbox";
// var massiveInstance = massive.connectSync({connString : connString});

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
// app.set('db', massiveInstance);
var controller = require('./controller.js');
//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.
// var db = massive.connect({connectionString : connString},
//   function(err, localdb){
//     db = localdb;
//     app.set('db', db);
//     db.user_create_seed(function(){
//       console.log("User Table Init");
//     });
//     db.vehicle_create_seed(function(){
//       console.log("Vehicle Table Init");
//     });
// });

app.get('/api/users', controller.allUsers);
// app.get('/api/vehicles', controller.allVehicles);
app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});

module.exports = app;
