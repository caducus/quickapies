// =========================
// Dependencies
// =========================

<<<<<<< HEAD
// const bcypt = require("bcyrpt");
=======
>>>>>>> 7b6b960d3b491418906d1a4655163b5617e55bd8
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

require("dotenv").config();

const app = express();

// =========================
// Configurations
// =========================

const port = process.env.PORT || 3005;

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose.");
});

// ==========================
// Fix Deprecation Warnings
// ==========================

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// ==========================
// Middleware
// ==========================

app.use(express.static("public"));
app.use(express.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }));

// ==========================
// Listener
// ==========================

app.listen(port, () => {
  console.log("I'm totes listenin' on port: " + port);
});
