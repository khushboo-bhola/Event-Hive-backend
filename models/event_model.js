const mongoose=require("mongoose");
const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    maxParticipants: Number,
    registrationDeadline: Date,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports={
    eventSchema
};