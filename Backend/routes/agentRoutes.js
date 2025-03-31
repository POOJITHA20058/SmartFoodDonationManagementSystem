const express = require("express");
const router = express.Router();

// Example Agent Route
router.get("/tasks", (req, res) => {
    res.json({ message: "Agent Tasks" });
});

module.exports = router;
