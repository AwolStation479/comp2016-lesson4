

var express = require('express');
var router = express.Router();

router.get( '/', function(req,res,next){
    //res.send('respond with a resource');
    
    var userList = ['One', 'Two', 'Three'];

    res.render('users', {title: 'User List', users: userList});
});



module.exports = router;