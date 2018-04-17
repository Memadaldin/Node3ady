var express = require('express');
var router = express.Router();
const User = require('../models/user.js')

//chaining
/*router.route('/')
.get( function(req, res, next) {
  user.find((err,users)=>{
    res.json(users);

  })
})
.post((req,res,next)=>{
  console.log('user requested post method');
  next();
},function (req,res,next){
  
});

router.use((req,res,next)=>{
  console.log('user requested post method');
  next();
});*/
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find((err,users)=>{
    res.json(users);

  })
});

router.use((req,res,next)=>{
  console.log('user requested post method');
  next();
});

/* Post*/
router.post('/getData', (req,res,next)=>{
  /*let userObj = User.create(req.body)
  .then(data=>{
    
    res.json(data)
  })
  .catch(err=>{
    next(err)
  });*/
  
  let userObj2 = new User(req.body);
  userObj2.save(function(err,userInserted){
    if(err) return next(err)
    res.json(userInserted)
  });

})



module.exports = router;
