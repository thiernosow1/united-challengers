const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/challenge');

// get all posts
function listPosts(req, res){
    db.all( "SELECT * FROM posts", (err, rows) => {
      res.json(rows);
    });
  }

// get a user posts

function userPosts(req, res){
  db.all("SELECT * FROM posts WHERE user_id = ?", [req.params.user_id], (err, rows) => {
    res.json(rows);
  });
}

  module.exports = {listPosts, userPosts};