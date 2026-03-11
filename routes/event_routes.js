const express = require("express")
const router = express.Router()

const {
createEvent,
getEvents,
updateEvent,
deleteEvent
} = require("../controllers/event_controllers")

// Create Event
router.post("/create", createEvent)

// Get All Events
router.get("/", getEvents)

// Update Event
router.put("/:id", updateEvent)

// Delete Event
router.delete("/:id", deleteEvent)

module.exports = router