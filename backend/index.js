// index.js

// Use ES module syntax to import express
import express from "express";

// Create an express application
const app = express();

// Define a port to listen on
const PORT = process.env.PORT || 5001;

// Set up a basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
