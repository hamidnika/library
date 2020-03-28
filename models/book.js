const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  href: {
    type: String,
    required: false,
    unique: true
  },
  thumbnail: {
    type: String,
    required: false
  }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;