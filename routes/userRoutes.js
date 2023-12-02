import  express  from "express";
import {
    registerUser,loginUser,currentUser
} from "../controllers/userController.js";
import validateToken from "../middleware/validateTokenHandler.js";
const route = express.Router();

route.post("/register",registerUser);

route.post("/login",loginUser);

 route.get("/current",validateToken,currentUser); // validate token comes first in order since we have to authorized the person, before providing him information , if done vice verca then information will be given regardless of authorization being valid or not



export default route;