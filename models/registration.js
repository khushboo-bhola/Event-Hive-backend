const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    teamName: String,
    members: [String],
    registeredAt: {
        type: Date,
        default: Date.now
    }
})
const Registration = new mongoose.model("Registration", registrationSchema)
module.exports = {
    Registration,
    
}