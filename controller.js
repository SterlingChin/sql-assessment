var app = require('./index.js');
var db = app.get('db');
module.exports = {

allUsers : function(req, res, next){
db.users_all(function(err, users){
  if(err){
    res.status(500).send(err);
  } else {
    res.status(200).send("All Users");
  }
});
},

// allVehicles : function(req, res, next){
//   db.vehicles_all(function(err, users){
//     if(err){
//       res.status(500).send(err);
//     } else {
//       res.status(200).send("All Vehicles");
//     }
//   });
// },


};
