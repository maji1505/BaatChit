import mongoose from "mongoose";

const conversationSchema=new mongoose.Schema({
    participants:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
],
messages:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[]
    }
]
},{timestamps:true});

const Conversation=mongoose.model("Conversation",conversationSchema);
export default Conversation;

// In Mongoose, the { timestamps: true } option in a schema definition automatically 
// adds two fields to the schema: createdAt and updatedAt. These fields store 
// the date and time when a document is created and the date and time when a document 
// is last updated, respectively.