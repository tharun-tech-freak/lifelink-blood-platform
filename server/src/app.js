import express from "express";
import cors from "cors";

import Donor from "./models/Donor.js";
import Requester from "./models/Requester.js";
import BloodBank from "./models/BloodBank.js";

const app = express();

app.use(cors());
app.use(express.json());

// Health-check route
app.get("/", (req, res) => {
  res.json({
    message: "LifeLink API is running",
  });
});

// -------------------- DONORS --------------------

// Get all donors
app.get("/api/donors", async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 });
    res.json(donors);
  } catch (error) {
    console.error("Error fetching donors:", error);
    res.status(500).json({
      message: "Failed to fetch donors.",
    });
  }
});

// Register a donor
app.post("/api/donors", async (req, res) => {
  try {
    const { name, bloodGroup, age, phone, city } = req.body;

    const donor = await Donor.create({
      name,
      bloodGroup,
      age: Number(age),
      phone,
      city,
    });

    res.status(201).json({
      id: donor._id,
      message: "Donor registered successfully!",
    });
  } catch (error) {
    console.error("Error registering donor:", error);
    res.status(500).json({
      message: "Failed to register donor.",
    });
  }
});

// ------------------ REQUESTERS ------------------

// Get all requesters
app.get("/api/requesters", async (req, res) => {
  try {
    const requesters = await Requester.find().sort({ createdAt: -1 });
    res.json(requesters);
  } catch (error) {
    console.error("Error fetching requesters:", error);
    res.status(500).json({
      message: "Failed to fetch requesters.",
    });
  }
});

// Register a requester
app.post("/api/requesters", async (req, res) => {
  try {
    const { name, bloodGroup, age, phone, city } = req.body;

    const requester = await Requester.create({
      name,
      bloodGroup,
      age: Number(age),
      phone,
      city,
    });

    res.status(201).json({
      id: requester._id,
      message: "Requester registered successfully!",
    });
  } catch (error) {
    console.error("Error registering requester:", error);
    res.status(500).json({
      message: "Failed to register requester.",
    });
  }
});

// ------------------ BLOOD BANKS ------------------

// Get all blood banks
app.get("/api/blood-banks", async (req, res) => {
  try {
    const bloodBanks = await BloodBank.find().sort({ createdAt: -1 });
    res.json(bloodBanks);
  } catch (error) {
    console.error("Error fetching blood banks:", error);
    res.status(500).json({
      message: "Failed to fetch blood banks.",
    });
  }
});

// Register a blood bank
app.post("/api/blood-banks", async (req, res) => {
  try {
    const { name, city, contactPerson, phone, email } = req.body;

    const bloodBank = await BloodBank.create({
      name,
      city,
      contactPerson,
      phone,
      email,
    });

    res.status(201).json({
      id: bloodBank._id,
      message: "Blood bank registered successfully!",
    });
  } catch (error) {
    console.error("Error registering blood bank:", error);
    res.status(500).json({
      message: "Failed to register blood bank.",
    });
  }
});

// Fallback route: helps identify missing endpoints
app.use((req, res) => {
  res.status(404).json({
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

export default app;