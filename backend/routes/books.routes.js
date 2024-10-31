import express from "express";
import { Book } from "../models/book.model.js";
import {
  createBook,
  deleteBook,
  showBookDetails,
  showBooks,
  updateBook,
} from "../controllers/books.controllers.js";
const router = express.Router();

router.get("/", showBooks);

router.post("/", createBook);

router.get("/:id", showBookDetails);

router.delete("/:id", deleteBook);

router.patch("/:id", updateBook);

export default router;
