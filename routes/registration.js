const express = require("express")
const router = express.Router()

const {
createRegistration,
getRegistrations,
updateRegistration,
deleteRegistration
} = require("../controllers/registration_controllers")

// Register for Event
router.post("/create", createRegistration)

// Get Registrations
router.get("/", getRegistrations)

// Update Registration
router.put("/:id", updateRegistration)

// Delete Registration
router.delete("/:id", deleteRegistration)

module.exports = router