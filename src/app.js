import express from "express";

import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(cors());
import userRoutes from "./routes/users.routes.js";
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://imdigitalashish:imdigitalashish@cluster0.cujabk4.mongodb.net/")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    app.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });
}

start();