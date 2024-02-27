var express = require("express");
var router = express.Router();
const userModel = require("./users");
const passport=require('passport')
const localStrategy =require("passport-local")

passport.use(new localStrategy(userModel.authenticate()))

/* GET home page. */
// router.get("/", function (req, res, next) {
//   req.session.monjur=true
//   res.render("index");
//   console.log(req.session);
// });

router.get("/",(req,res)=>{
  // res.cookie("age",25)
  res.render("index");
})

router.post('/regester',()=>{
  var userData =new userModel({
    username: String,
    secret: String
  })
});

userModel.register(userdata,req.body.password)
  .then((registereduser)=>{
    
  })
// router.get("/read",(req,res)=>{
//   console.log(req.cookies);
//   res.send("read")
// })
// 
// router.get("/delete",(req,res)=>{
//   res.clearCookie("age")
//   res.send("delete")
// })

module.exports = router;
