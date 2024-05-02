const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtKey = 'e-comm';

const login = async (req, res) => {
  try {
    const verifyPass = async (plainPass, hassPass) => {
      const match = await bcrypt.compareSync(plainPass, hassPass);
      return match;
    };
    if (req.body.email && req.body.password) {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        //Password Compare with bcrypt
        let comPass = await verifyPass(req.body.password, user.password);
        console.log(comPass);
        //JWT Token
        if(comPass){
          jwt.sign({user},jwtKey,{expiresIn:"1h"},(err,token)=>{
            res.send(!err ? {user,auth:token}:"Something went wrong");
          })
        }else{
          res.send({
            result: "Password is incorrect",
          })
        }
      } else {
        res.send({ result: "No user found,Please Signup" });
      }
    } else {
      res.send({ result: "Please enter email and password" });
    }
  } catch (error) {
    return res.status(422).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = login;
