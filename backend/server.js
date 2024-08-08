import path from 'path';          //for deployment
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


import authRoutes from "./routes/auth_routes.js"
import messageRoutes from "./routes/message_routes.js"
import userRoutes from "./routes/user_routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
import {app, server } from "./socket/socket.js";

dotenv.config();

// const app=express();
const PORT=process.env.PORT||8080; 

const __dirname=path.resolve();   //for deployment

app.use(express.json()); //to parse incoming requests with Json payloads(from req.body)
app.use(cookieParser());



app.use("/api/auth",authRoutes); //middleware  
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"frontend","dist")));  //for deployment serve static file

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

server.listen(PORT, () =>{
    connectToMongoDB(); 
    console.log(`Server started on port ${PORT}`);
});