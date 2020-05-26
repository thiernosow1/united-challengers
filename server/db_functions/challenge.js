const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/challenge');

// get all challenges list
function listChallenge(req, res){
    db.all( "SELECT * FROM challenges", (err, rows) => {
      res.json(rows);
    });
  }

  module.exports = {listChallenge};