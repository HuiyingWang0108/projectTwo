var db = require("../models");

module.exports = function(app) {
  //Load createpostType page
   app.get('/createpost', function (req, res) {
   console.log("req:++++++= ", req);
   res.render("createpost", {
     selection: req // get the user out of session and pass to template
   });
 });
 app.post("/createpost",function(err,data){
   if(err) throw err;

 });
  // // Get all Users
  // app.get("/api/users", function(req, res) {
  //   db.Post.findAll({}).then(function(dbUsers) {
  //     res.json(dbUsers);
  //   });
  // });

  // // Create a new user
  // app.post("/api/users", function(req, res) {
  //   db.Post.create(req.body).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/users/:id", function(req, res) {
  //   db.Post.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });
};
