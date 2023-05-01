const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.set("view engine", "ejs");

const organizersRaw = fs.readFileSync("organizing_comitee.json");
const organizers = JSON.parse(organizersRaw);
app.get("/organizers", (req, res) => {
  res.json(organizers);
});

const scientificComiteeRaw = fs.readFileSync("scientific_comitee.json");
const scientificComitee = JSON.parse(scientificComiteeRaw);
app.get("/comitee", (req, res) => {
  res.json(scientificComitee);
});

const participantsRaw = fs.readFileSync("participants.json");
const participants = JSON.parse(participantsRaw);
app.get("/participants", (req, res) => {
  res.json(participants);
});

const speakersRaw = fs.readFileSync("speakers.json");
const speakers = JSON.parse(speakersRaw);
app.get("/speakers", (req, res) => {
  res.json(speakers);
});

app.get("/general-info", (req, res) => {
  res.render("general-info");
});

app.get("/accomodation", (req, res) => {
  res.render("accomodation");
});

app.listen(3010, () => {
  console.log("Listening on port 3010...");
});
