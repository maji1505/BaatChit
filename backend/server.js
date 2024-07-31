import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth_routes.js"
import messageRoutes from "./routes/message_routes.js"
import userRoutes from "./routes/user_routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";

const app=express();
const PORT=process.env.PORT||3000;

dotenv.config();

app.use(express.json()); //to parse incoming requests with Json payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes); //middleware 
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);


app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server started on port ${PORT}`);
});