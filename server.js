const express = require("express");
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api-routes");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

// express Connect Database
connectDB();

// Init Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json({ extended: true }));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

app.get("/", (req, res) => res.send("API running"));

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));



  
var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

// use Routes
app.use('/api/bookss', require('./routes/api/books'));


// Define API routes here
app.use("/api", apiRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect("mongodb+srv://http://mernudem.herokuapp.com")

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run ${PORT} Successfully`));
