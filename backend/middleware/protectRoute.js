import jwt from 'jsonwebtoken';
import User from '../models/user_model.js';

const protectRoute = async (req, res, next) => {
    try {
        console.log(req.cookies);
        const token = req.cookies.jwt;
        

        if (!token) {
            return res.status(401).json({ error: "unauthorized no token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);

        if (!decoded) {
            return res.status(401).json({ error: "unauthorized - Invalid token" });
        }

        const user = await User.findById(decoded.userId).select('-password');//this line return all User 
                                                                             //but except password
        if (!user) {                                                         //select('-password')
            return res.status(404).json({ error: "user not found" }); //if you want multiple value hide then
        }                                                         // select('-password -userName') like that

        req.user = user;
        next();


    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({ error: "Internal serveer error" });
    }
}

export default protectRoute;