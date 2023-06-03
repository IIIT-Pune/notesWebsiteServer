const express = require("express");
const dotenv = require("dotenv");
dotenv.config("./.env");
const Dbconnect = require("./Dbconnect");
const app = express();
const cors = require("cors");
const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const morgan=require('morgan')
const cookie = require("cookie-parser");
app.use(express.json({ limit: "10mb" }));
app.use(morgan("common"));
app.use(
  cors({
    credentials: true,
    origin: process.env.Client_URL,
  })
);
app.use(cookie());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});
Dbconnect();
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
