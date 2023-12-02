import  express  from "express";
const router = express.Router();
import {
    getContacts, creatContact, getContact,updateContact,deleteContact
}   from "../controllers/contactController.js";
import validateToken from "../middleware/validateTokenHandler.js";

router.use(validateToken);

router.route("/").get(getContacts).post(creatContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export default router;

