const express = require("express")
const router = express.Router()

const {
createUser,
getUsers,
updateUser,
deleteUser
} = require("../controllers/user_controllers")

// Create User
router.post("/create", createUser)

// Get All Users
router.get("/", getUsers)

// Update User
router.put("/:id", updateUser)

// Delete User
router.delete("/:id", deleteUser)

module.exports = router