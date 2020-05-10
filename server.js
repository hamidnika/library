const express = require("express");
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api-routes");
const path = require("path");
const app = express();

const bodyParser = require('body-parser');

// express Connect Database
connectDB();


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

app.get("/", (req, res) => res.send("API running"));
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
/* app.use(cors({ origin: true, credentials: true })); */

// Init Middleware
app.use(express.json({ extended: false }));

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use('/api/bookss', require('./routes/api/books'));
app.use("/api", apiRoutes);
app.use('/public', express.static('public'));
app.use('/apimages', require('./routes/image-rout'));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run ${PORT} Successfully`));

app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
      next(new Error('Something went wrong'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
