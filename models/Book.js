const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  book_name: String,
  Author: String,
  category: String,
  price: Number,
  Quantity: Number,
  status: {
    type: String,
    default: "Available"
  }
});

module.exports = mongoose.model("Book", bookSchema);