import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const PORT = 8000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // Allow frontend origin
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// Routes
app.use("/api/v1/users", userRoutes);

// Connect to MongoDB and Start the Server
const start = async () => {
    try {
        const connectionDb = await mongoose.connect("mongodb+srv://chiranthdv45:wMI4z3JLVG32i1dJ@cluster0.6ptjn.mongodb.net/");
        console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    } catch (e) {
        console.error(`Failed to connect to MongoDB: ${e.message}`);
    }
};

start();
