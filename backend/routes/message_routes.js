
import express from "express";
const router=express.Router();
import {getMessages, sendMessage} from "../controlers/message_controller.js"
import protectRoute from "../middleware/protectRoute.js";

router.get("/:id",getMessages)
router.post("/send/:id",sendMessage);

export default router;

