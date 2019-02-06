module.exports = function (app, passport) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });
  //Load createpost page
  // app.get("/createpost", function (req, res) {
  //   res.render("createpost");
  // });
  //=========login===================
  // show the login form
  app.get("/login", function (req, res) {

    // render the page and pass in any flash data if it exists
    res.render("login", { message: req.flash('loginMessage') });
  });
  // process the login form
  app.post("/api/login", passport.authenticate("local-login", {
    successRedirect: "/createpost", // redirect to the secure profile section
    failureRedirect: "/login", // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }),
    function (req, res) {
      console.log("hello");

      if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
      } else {
        req.session.cookie.expires = false;
      }
      res.redirect('/');
    });

  //=========signup===================
  // show the signup form
  app.get('/signup', function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup', { message: req.flash('signupMessage') });
  });
  // process the signup form
  app.post('/api/signup', passport.authenticate('local-signup', {
    successRedirect: '/createpost', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));
  //===========PROFILE SECTION =====================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  // app.get('/profile', isLoggedIn, function (req, res) {
  //   console.log("req.user:++++++= ", req.user);
  //   res.render('profile', {
  //     user: req.user // get the user out of session and pass to template
  //   });
  // });
  //=========createpost section======createpost page routes=========
  app.get('/createpost', function (req, res) {//delete "isLoggedIn,"
    console.log("req.user:++++++= ", req.user);
    res.render('createpost', {
      condition: {
        "isNotLogin": typeof req.user === "undefined"
      },
      user: req.user // get the user out of session and pass to template
    });
  });
  //process the local form
  app.post("/api/createpost",function(req,res){
    // if(err) throw err;
    console.log("***data***",res.body);
  });
  //==========createpostType section====createpostType page routes==========
 app.get("/createpostType",function(req,res){
   res.render("createpostType");
 });

  // ====LOGOUT ==============================
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
};
// route middleware to make sure
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
