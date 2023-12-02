import mongoose from "mongoose";

const contctSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true,"Please add the contact name"],
    },
    email: {
        type: String,
        required: [true,"Please add the contact email id "],
    },
    phone: {
        type: String,
        required: [true,"Please add the contact phone no."],
    },
},
 {
    timestamps: true,  
 }
);

const Contact = mongoose.model("contact", contctSchema);
export default Contact;