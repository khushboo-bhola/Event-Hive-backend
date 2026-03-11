const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "owner"],
        default: "user"
    }
})
module.exports={
    userSchema
};