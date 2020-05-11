const express = require("express");
const router = express.Router();

// Load Book model
const Bookk = require("../../models/Bookk");

// @route GET api/books/test
// @description tests books route
// @access Public
router.get("/test", (req, res) => res.send("book route testing!"));

// @route GET api/books
// @description Get all books
// @access Public
var todayStart = new Date("2020-01-01");
todayStart.setSeconds(0);
todayStart.setHours(0);
todayStart.setMinutes(0);
todayStart.setMilliseconds(0);

var todayEnd = new Date();
todayEnd.setHours(23);
todayEnd.setMinutes(59);
todayEnd.setSeconds(59);
todayEnd.setMilliseconds(999);
router.get("/", (req, res) => {
  Bookk.find({"published_date": {$gte: new Date(todayStart).toISOString(),$lte: new Date(todayEnd).toISOString()}})
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: "No Books found" }));
});

var Start = new Date("1900-01-01");
Start.setSeconds(0);
Start.setHours(0);
Start.setMinutes(0);
Start.setMilliseconds(0);

var End = new Date();
End.setHours(23);
End.setMinutes(59);
End.setSeconds(59);
End.setMilliseconds(999);
router.get("/archive", (req, res) => {
  Bookk.find({"published_date": {$gte: new Date(Start).toISOString(),$lte: new Date(End).toISOString()}})
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: "No Books found" }));
});
// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get("/:id", (req, res) => {
  Bookk.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: "No Book found" }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post("/", (req, res) => {
  Bookk.create(req.body)
    .then(book => res.json({ msg: "Book added successfully" }))
    .catch(err => res.status(400).json({ error: "Unable to add this book" }));
});


router.post("/search-data", function(req, res, next) {
  const regex = new RegExp(escapeRegex(req.body.word), 'gi')
  UserData.find({ description: regex }).then(function(doc) {
    res.render("index", { itemss: doc });
  });
});
// @route GET api/books/:id
// @description Update book
// @access Public
router.put("/:id", (req, res) => {
  Bookk.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: "Updated successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
  //res.redirect('/');
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
  Bookk.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: "Book entry deleted successfully" }))
    .catch(err => res.status(404).json({ error: "No such a book" }));
  //res.redirect('/');
});

module.exports = router;
