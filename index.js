const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.set("view engine", "ejs");

const homeRaw = fs.readFileSync("home.json");
const home = JSON.parse(homeRaw);
app.get("/home", (req, res) => {
  res.json(home);
});

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

let http = require("http");
let path = require("path");

http
  .createServer(function (request, response) {
    console.log("request starting...");

    var filePath = "./images" + request.url;
    var extname = path.extname(filePath);
    var contentType = "text/html";
    switch (extname) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpg";
        break;
      case ".wav":
        contentType = "audio/wav";
        break;
    }

    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code == "ENOENT") {
          fs.readFile("./404.html", function (error, content) {
            response.writeHead(200, { "Content-Type": contentType });
            response.end(content, "utf-8");
          });
        } else {
          response.writeHead(500);
          response.end(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n"
          );
          response.end();
        }
      } else {
        response.writeHead(200, { "Content-Type": contentType });
        response.end(content, "utf-8");
      }
    });
  })
  .listen(3011);
console.log("Server running at http://127.0.0.1:3011/");
