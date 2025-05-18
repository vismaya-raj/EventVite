# 🎉 EventVite Website

A full-stack web application that helps users create and share personalized event invitations in PDF format with email delivery.

---

## 🚀 Project Goal

The aim of this project is to simplify how people create and send event invitations. Instead of designing manually, users can enter event details into a form, preview the invitation dynamically, and send it as a styled **PDF via email** directly to guests.

---

## 🛠️ Tech Stack

- **Frontend:** ReactJS with Material-UI (MUI)
- **Backend:** Node.js + Express
- **Database:** MongoDB with Mongoose
- **PDF Generation:** Pdfkit
- **Email Delivery:** Nodemailer
- **Styling:** Material-UI Components & Custom Themes

---

## ✨ Features

- 📝 **Dynamic Invitation Card Preview**  
  Users can select an event type (birthday, baby shower, housewarming), and the UI adjusts with a matching background and theme.

- 📄 **PDF Invitation Generation**  
  Generates a visually styled invitation card as a PDF based on user input.

- 📧 **Email Sending via Nodemailer**  
  Automatically sends the generated PDF invitation to the guest’s email address.

- 🔍 **Guest Name Autocomplete**  
  Provides autocomplete suggestions when entering guest names, fetched from MongoDB.

- 💾 **Event Data Storage**  
  Stores event and guest details in MongoDB for future reference.

---

## 🧠 How I Built It

- Used **ReactJS + MUI** to create a responsive and themed user interface.
- Built a Node.js API with Express to handle form submissions, fetch guest suggestions, and manage mailing.
- Used **pdfkit** on the server to convert the invite layout into a PDF file.
- Integrated **Nodemailer** to email the PDF as an attachment to the recipient.
- Stored all events and friend records in **MongoDB** using **Mongoose models**.

---





