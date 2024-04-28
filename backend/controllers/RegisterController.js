const User = require("../models/user");
const bcrypt = require('bcrypt');


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
    const hashpass=async (plainpass)=>{
      const saltround=10;
      const hash =await bcrypt.hashSync(plainpass, saltround);
      return hash;
    }
    
    let user = new User(req.body);
    user.password = await hashpass(user.password);
    console.log(user)
    let result = await user.save();
    return res.status(200).json({
      status: true,
      data: req.body,
    });
  } catch (error) {
    return res.status(422).json({
        status: false,
        message: error.message,
      });
  }
};

module.exports=register
