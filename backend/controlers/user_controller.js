import User from "../models/user_model.js";

export const getUsersForSidebar=async(req,res)=>{
    try{
         
        const loggedInUserId="66a3425336ad0ece8d8df691";

        const allUsers= await User.find({_id:{$ne:loggedInUserId}}).select("-fullName",);//find all user except loggedInUserId
           
        // console.log(allUsers);
        res.status(200).json(allUsers);

    }catch(error){
        console.error("Error in getUsersSidebar: ",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}