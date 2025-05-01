const express = require("express");
const Guest = require("../models/Guest");
const generatePDF = require("../utils/pdfGenerator");
const sendInvitationEmail = require("../utils/mailer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Save guest details
    const newGuest = new Guest(req.body);
    const savedGuest = await newGuest.save();

    // Ensure invitations directory exists
    const invitationDir = path.join(__dirname, "../invitations");
    if (!fs.existsSync(invitationDir)) {
      fs.mkdirSync(invitationDir);
    }

    // Generate PDF path
    const pdfPath = path.join(invitationDir, `invitation_${savedGuest._id}.pdf`);

    // Generate the invitation PDF
    await generatePDF(savedGuest, pdfPath);

    // Send the invitation via email
    await sendInvitationEmail(savedGuest.email, pdfPath);

    res.status(201).json({ message: "Guest saved and email sent", guest: savedGuest });
  } catch (err) {
    console.error("Error in POST /guest:", err);
    res.status(500).json({ message: "Server error", error: err.toString() });
  }
});

// For autocomplete suggestions
router.get("/", async (req, res) => {
  try {
    const guests = await Guest.find({}, "name email phone");
    res.json(guests);
  } catch (err) {
    console.error("Error fetching guests:", err);
    res.status(500).json({ message: "Error fetching guests", error: err.toString() });
  }
});

module.exports = router;
