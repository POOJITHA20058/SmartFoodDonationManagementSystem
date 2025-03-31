const express = require("express");
const User = require("../models/User"); // Import User model
const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from MongoDB
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
});

module.exports = router;
