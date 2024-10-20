const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const dbUrl = process.env.MONGO_URL;
const PORT = process.env.PORT;

const apiRouter = require("./routes/api");

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use("/api", apiRouter);
app.use("/", (req, res) => res.send("Hello"));

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("DB connected...");
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
  })
  .catch((error) => console.log(error));
