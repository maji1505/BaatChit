import Conversation from "../models/conversation_model.js";
import Message from "../models/message_model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }
        // await conversation.save(); // this is run first
        // await newMessage.save();   // then runs it

        await Promise.all([conversation.save(),newMessage.save()]); //this runs parallel

        const recieverSocketId=getRecieverSocketId(receiverId);
        if(recieverSocketId){
            io.to(recieverSocketId).emit("newMessage",newMessage);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        // console.log("error in the sendMessage controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getMessages=async(req,res)=>{

    try{
        const {id:userToChatId}=req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
     participants:{$all:[senderId,userToChatId]}}).populate("messages");//not reference but actual messages

     if(!conversation) return res.status(200).json([]);

     const messages=conversation.messages;
     res.status(200).json(messages);
    //  console.log(conversation)
// console.log(messages);
    }catch(error){
        // console.log("error in getMessages controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}
