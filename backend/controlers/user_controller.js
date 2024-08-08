import User from "../models/user_model.js";

export const getUsersForSidebar=async(req,res)=>{
    try{
         
        const loggedInUserId=req.user._id;

        const allUsers= await User.find({_id: { $ne: loggedInUserId } }).select("-password",);//find all user except loggedInUserId
           
        console.log(allUsers);
        res.status(200).json(allUsers);

    }catch(error){
        console.error("Error in getUsersSidebar: ",error.message);  
        res.status(500).json({error:"Internal server error"});
    }
}