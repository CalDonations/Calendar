// server.cjs
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./db");  

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Donation Schema
const donationSchema = new mongoose.Schema({
  title: String,
  date: String,
  type: String,
  amount: Number,
  note: String,
});

const Donation = mongoose.model("Donation", donationSchema);

// Routes
app.get("/api/donations", async (req, res) => {
  const donations = await Donation.find();
  res.json(donations);
});

app.post("/api/donations", async (req, res) => {
  const newDonation = new Donation(req.body);
  await newDonation.save();
  res.json(newDonation);
});

app.put("/api/donations/:id", async (req, res) => {
  const updatedDonation = await Donation.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedDonation);
});

app.delete("/api/donations/:id", async (req, res) => {
  await Donation.findByIdAndDelete(req.params.id);
  res.json({ message: "Donation deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
