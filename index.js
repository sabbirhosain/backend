import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";

dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;

// connect the express with middleware
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// CORS policy
app.use(cors());






// running the server GET request
app.get("/", (req, res) => {
    res.send("Server running Successfully!")
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})