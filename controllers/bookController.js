const Book = require("../models/Book");


exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.render("book", { books });
  } catch (err) {
    console.log("Error fetching books:", err.message);
  }
};


exports.addPage = (req, res) => {
  res.render("form", {
    title: "Add Book",
    heading: " Add New Book",
    buttonText: "Add Book"
  });
};


exports.addBook = async (req, res) => {
  try {
    await Book.create(req.body);
    res.redirect("/");
  } catch (err) {
    console.log("Error adding book:", err.message);
  }
};


exports.editPage = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.render("edit", { book });
  } catch (err) {
    console.log("Error loading edit page:", err.message);
  }
};


exports.updateBook = async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (err) {
    console.log("Error updating book:", err.message);
  }
};


exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.log("Error deleting book:", err.message);
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.render("details", { book });
  } catch (err) {
    console.log("Error fetching details:", err.message);
  }
};