const express = require("express");
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api-routes");
const path = require("path");
const app = express();
/* const fileUpload = require('express-fileupload');
app.use(fileUpload()); */



// express Connect Database
connectDB();


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

app.get("/", (req, res) => res.send("API running"));
var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use('/api/bookss', require('./routes/api/books'));
app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run ${PORT} Successfully`));
