const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const router = require("./router/useRoutes");
const chatRouter = require("./router/chatRouter");
const pageNotFound=require('./middleware/errorMiddleware')
const colors = require("colors");
dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("this is cheat app");
});
app.use("/api/user", router);
app.use('/api/chat',chatRouter);

app.use(pageNotFound);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server at port ${PORT}`.yellow.bold);
});
