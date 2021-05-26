// Imports ====================================================
import express, { json } from "express";
import cors from "cors";
import MongoConnect from "./utils/db.js";
import dotenv from "dotenv";

// Setting ====================================================
const app = express();
dotenv.config();
app.use(cors());
app.use(json());

// Routes Import ==============================================
import LoginUser from "./routes/login.js";

// MongoDB Connection =========================================
MongoConnect();

// Main =======================================================
app.post("/login", LoginUser);

// Server =====================================================
app.get("/", (req, res) => {
  res.send("If You See This: Ur server works buddy so remove me please");
});
app.listen(process.env.PORT || 8080, () => {
  console.log("Server Connection: ✔");
});