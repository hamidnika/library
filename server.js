const express = require('express');
const connectDB = require('./config/db');
const apiRoutes = require("./routes/api-routes");
const path = require("path");
const app = express();

// express Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false}));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.get('/', (req, res) => res.send('API running'));

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
// Define API routes here
app.use("/api", apiRoutes);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server run ${PORT} Successfully`));