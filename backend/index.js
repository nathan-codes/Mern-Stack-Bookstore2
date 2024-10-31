import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import booksRoute from "./routes/books.routes.js"
dotenv.config();

const app = express();

const PORT = process.env.PORT;

// Middles
app.use(express.json());


app.use("/books", booksRoute);


app.listen(PORT, () => {
  connectDB();
  console.log(`App is listening on port ${PORT}`);
});
