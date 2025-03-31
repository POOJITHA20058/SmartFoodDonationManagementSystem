const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

// Validate .env Configuration
if (!process.env.MONGO_URL) {
    console.error(" MONGO_URL is missing in .env file!");
    process.exit(1);
}

const app = express();
app.use(express.json()); // Middleware to parse JSON

const MONGO_URL = process.env.MONGO_URL;

// Database Connection
async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log(" Connection established successfully");
    } catch (err) {
        console.error(" Database connection error:", err);
        process.exit(1); // Stop app if DB fails
    }
}
main();

// Import Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


const adminRoutes = require("./routes/adminRoutes");
const agentRoutes = require("./routes/agentRoutes");
const donorRoutes = require("./routes/donorRoutes");

// Use Routes
app.use("/api/admin", adminRoutes);
app.use("/api/agent", agentRoutes);
app.use("/api/donor", donorRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("Food Donation System API is running...");
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(" Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
});
