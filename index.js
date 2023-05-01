const express = require("express");
const app = express();
const cors = require("cors");
const fs = require('fs');

app.use(cors());

const organizersRaw = fs.readFileSync("organizing_comitee.json");
const organizers = JSON.parse(organizersRaw);
app.get("/organizers" , (req, res) => {
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
    req.json(participants);
})

const speakersRaw = fs.readFileSync("speakers.json");
const speakers = JSON.parse(speakersRaw);
app.get("/speakers", (req, res) => {
    req.json(speakers);
})

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})
