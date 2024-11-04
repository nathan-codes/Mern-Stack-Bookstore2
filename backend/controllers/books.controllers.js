import { Book } from "../models/book.model.js";

export const createBook = async (req, res) => {
  const newBook = req.body;
  try {
    const book = new Book(newBook);
    await book.save();
    console.log("New Book added and saved successfully", book);
    res.status(201).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.log("Error saving book to daatbase");
    res.status(400).json({
      sucess: false,
      message: error.message,
    });
  }
};

export const showBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json({ success: true, data: allBooks });
    console.log("All books fetched successfully", allBooks);
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: error.message,
    });
  }
};

export const showBookDetails = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const foundBook = await Book.findById(id);
    if (!foundBook) {
      res.status(400).json({ success: false, message: "Id not found" });
    }
    res.status(200).json({
      success: true,
      data: foundBook,
    });
  } catch (error) {
    console.log("Error finding specifc book ", error);
    res.status(400).json({
      sucess: false,
      message: error.message,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      deletedBook: deletedBook,
    });
  } catch (error) {
    console.log("Error finding specifc book ", error);
    res.status(400).json({
      sucess: false,
      message: error.message,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = req.body;
    const booktoUpdate = await Book.findByIdAndUpdate(id, updatedBook);
    console.log("successfully updated book", booktoUpdate);
    res.status(200).json({
      success: true,
      data: booktoUpdate,
    });
  } catch (error) {
    console.log("Error updating specifc book ", error);
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};