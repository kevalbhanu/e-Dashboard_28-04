const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const jwtKey = 'e-comm';


const register = async (req, res) => {
  try {
    const {email ,name ,password}=req.body;
    const existingEmail = await User.findOne({email:email}) ;
    console.log(existingEmail);
    if (existingEmail){
      return res.status(200).json({
        status: false,
        data: 'email already exist',
      });
    }
    //Hashing Password
    const hashpass=async (plainpass)=>{
      const saltround=10;
      const hash =await bcrypt.hashSync(plainpass, saltround);
      return hash;
    }
    
    let user = new User(req.body);
    user.password = await hashpass(user.password);
    console.log(user)
    let result = await user.save();
    jwt.sign({result},jwtKey,{expiresIn:"1h"},(err,token)=>{
      if(!err){
        res.status(200).json({
          result,
          auth:token
        })
      }else{
        res.status(400).json({
          message:err
        })
      }

    })
  } catch (error) {
    return res.status(422).json({
        status: false,
        message: error.message,
      });
  }
};

module.exports=register
