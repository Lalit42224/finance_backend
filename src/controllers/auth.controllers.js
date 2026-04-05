const userModel =  require("../models/user.models")
const bcrypt =  require("bcryptjs")
const jwt  = require("jsonwebtoken")

/**
 * user register controller
 * POST /api/auth/register
 */
exports.userRegisterController=async(req,res)=>{
         try{
                  const {name,email,password,role} =  req.body;
                  const userExist = await userModel.findOne({email});
                  if(userExist){
                           return res.status(400).json({message:"User alredy exist"});
                  }
                  const hashedPassword = await bcrypt.hash(password,10);
                  const user  = await userModel.create({
                           name,
                           email,
                           password:hashedPassword,
                           role,
                  });
                  res.status(201).json({msg:"User created", user});
                  console.log(user)

         
         } catch (err){
                  res.status(500).json({error:err.message});
         }
}


/**
 * user Login Controller
 * Post /api/auth/login
 */


exports.userLoginContoller=async(req,res)=>{
         try{
           const {email,password} =  req.body;
           const user =  await userModel.findOne({email}).select("+password")
           if(!user){
                   return res.status(400).json({message:"Invalid credentials"})
           }
           const isValidPassword = await bcrypt.compare(password,user.password);
           if(!isValidPassword) return res.status(400).josn({message:"Invalid credentials"});
           const token  =  jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1d"})
            res.cookie("token", token, {
      httpOnly: true,
      secure: false, // production me true
      sameSite: "lax"
    });

           res.json({message:"Login sucessful",token});
          

         }catch(err){
                  res.status(500).json({error:err.message})

         }
};