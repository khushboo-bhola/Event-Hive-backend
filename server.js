const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

require("./config/db");

const userRoutes = require("./routes/user_routes");
const eventRoutes = require("./routes/event_routes");
const registrationRoutes = require("./routes/registration");

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Event Hive API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});