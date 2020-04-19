const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
const fileUpload = require('express-fileupload');
app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

// express Connect Database
connectDB();

// Init Middleware
//app.use(express.urlencoded({ extended: true}))
app.use(express.json({ extended: true }));



var cors = require('cors');
app.use(cors({ origin: true, credentials: true }))

app.get("/", (req, res) => res.send("API running"));

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use('/api/bookss', require('./routes/api/books'));
app.use("/api", require("./routes/api-routes"));


  // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}





// Define API routes here

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run ${PORT} Successfully`));
