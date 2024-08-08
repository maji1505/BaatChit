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



app.use(express.json()); //to parse incoming requests with Json payloads(from req.body)
app.use(cookieParser());
// app.use(cors(
//     {
//         origin: 'http://localhost:5173', // Your frontend URL
//         credentials: true // Allow credentials to be sent
//       }
// ));



app.use("/api/auth",authRoutes); //middleware  
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);


server.listen(PORT, () =>{
    connectToMongoDB(); 
    console.log(`Server started on port ${PORT}`);
});