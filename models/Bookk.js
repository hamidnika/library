const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  isbn: {
    type: String,
    required: false
  },
  authors: {
    type: Array,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  published_date: {
    type: Date,
    required: false
  },
  publisher: {
    type: String,
  }
  /*   updated_date: {
    type: Date,
    default: Date.now
  } */
});
var Bookk = mongoose.model("Bookk", BookSchema);
module.exports = Bookk;
