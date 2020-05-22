const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/challenge');

function list(req, res){
    db.all( "SELECT * FROM users", (err, rows) => {
      res.json(rows);
    });
  }

  function profile(req, res) {
    db.get( "SELECT * FROM users WHERE id = ?", [req.params.id], (err, rows) => {
      res.json(rows);
    });
  }

  module.exports = {list,profile};