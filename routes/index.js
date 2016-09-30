var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: 'Hello World' });
});

module.exports = router;

router.get('/random', function(req,res,next){
  var newNumber = Math.random();

  // load the view and pass the title and number
  res.render('random', {title: 'Random Number Generator', randomNumber: newNumber});
});