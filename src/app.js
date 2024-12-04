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
    const connectionDb = await mongoose.connect("mongodb+srv://chiranthdv45:wMI4z3JLVG32i1dJ@cluster0.6ptjn.mongodb.net/")
    console.log(`server is running on port http://localhost:${8000}`);
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
    app.listen(app.get(8000), () => {
        console.log("LISTENIN ON PORT 8000")
    });
}

start();