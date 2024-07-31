import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersForSidebar } from '../controlers/user_controller.js';

const router=express.Router();

router.get('/',getUsersForSidebar);

export default router;