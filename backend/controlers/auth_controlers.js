import User from "../models/user_model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";




export const signup = async (req, res) => {
   try {
      const { fullName, userName, password, confirmPassword, gender } = req.body;

      if (password !== confirmPassword) {
         return res.status(400).json({ error: "passwords don't match" })
      }

      const user = await User.findOne({ userName });

      if (user) {
         return res.status(400).json({ error: "user already exists" })
      }

      //hash password here 
      const salt = await bcryptjs.genSalt(6);
      const hashPassword = await bcryptjs.hash(password, salt);

      //use placeholder avatar

      const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
      const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

      const newUser = new User({
         fullName,
         userName,
         password: hashPassword,
         gender,
         profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
      });

      if (newUser) {
         //generate jwt token here
          generateTokenAndSetCookie(newUser._id,res);
         await newUser.save();
         // console.log(newUser);
         res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
         })
      }
      else {
         res.status(400).json({ error: 'invalid user data' });
      }

   } catch (error) {
      // console.log(`error in signup controller ${error.message}`)
      res.status(500).json({ error: "internal serrver error" })
   }
}

export const login = async (req, res) => {
   try{
        const {userName,password}=req.body;
        const user=await User.findOne({userName});
        const isPasswordCorrect= await bcryptjs.compare(password,user?.password ||"" );

        if(!user || !isPasswordCorrect){
         return res.status(400).json({error:"invalid username or password"});
        }

        generateTokenAndSetCookie(user._id,res);  
        res.status(201).json({
         _id: user._id,
         fullName: user.fullName,
         userName: user.userName,
         profilePic: user.profilePic
      })
        
   }catch (error) {
      // console.log(`error in login controller ${error.message}`)
      res.status(500).json({ error: "internal server Error" })
   }

}

export const logout =  (req, res) => {
 try{
   res.cookie("jwt","",{mexAge:0});
   return res.status(200).json({message:"logged out successfully"});

 }catch (error) {
   // console.log(`error in logout controller ${error.message}`)
   res.status(500).json({ error: "internal server Error" })
}
}
