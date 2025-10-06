import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cors from 'cors'
dotenv.config({});
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";

const app = express();
app.use(clerkMiddleware())
app.use(express.json())

app.use('api/clerkk',clerkWebhooks)
app.use(cors())
const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("Api is working");
});

const startServer = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
};

startServer();
