import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type:String,
        require:[true,"Please add the username"],
    },

    email: {
        type:String,
        require:[true,"Please add the user email address"],
        unique: [true, "Eamil address already taken"],
    },

    password: {
        type:String,
        require: [true, "Please add the user password"],
    },
},
{
    timestamps:true,
}
);
const User = mongoose.model("User",userSchema);
export default User;