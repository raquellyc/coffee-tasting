var express = require('express');
var router = express.Router();
const passport = require('passport');
const { find } = require('../models/bean');
const Bean = require('../models/bean');

/* GET home page. */
router.get('/', function(req, res, next) {
  Bean.find({}, function(err, beans) {
    beans = beans.map(b => ({
      _id: b._id, 
      coffeename: b.coffeename, 
      avgRating: b.reviews.reduce((sum, r) => sum + r.rating, 0) / b.reviews.length
    }));
    beans.sort((a, b) => b.avgRating - a.avgRating);
    res.render('home', { title: '', beans });
  })
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
