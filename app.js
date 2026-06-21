const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.static("public"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/library")
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((err) => {
        console.log("MongoDB Error:", err);
    });

// Schema
const bookSchema = new mongoose.Schema({
    
book_name: String,
Author: String,
    category: String,
    price: String,
    Quantity: Number
});

// Model
const Book = mongoose.model("Book", bookSchema);

// Home Route
app.get("/", async (req, res) => {
    try {
        const allBooks = await Book.find();

        console.log("Books:", allBooks);

        res.render("book", { allBooks });

    } catch (error) {
        console.log("HOME ROUTE ERROR:", error);
        res.send("Error loading books");
    }
});

// Form Route
app.get("/insertdata", (req, res) => {
    res.render("form");
});

// Create Book
app.post("/createdata", async (req, res) => {
    try {

        await Book.create(req.body);

        res.redirect("/");

    } catch (error) {

        console.log("CREATE ERROR:", error);

        res.send("Error creating book");
    }
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});