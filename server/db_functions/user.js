const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/challenge');


// get all users
function listUsers(req, res){
    db.all( "SELECT * FROM users", (err, rows) => {
      res.json(rows);
    });
  }

  // get a user informations
  function profile(req, res) {
    db.get( "SELECT * FROM users WHERE id = ?", [req.params.id], (err, rows) => {
      res.json(rows);
    });
  }

  //Add user

  function addUser(req, res){
    db.run( "INSERT INTO users (login, password, birth_date, picture_url, remember) VALUES (?,?,?,NULL)", [req.body.login,req.body.password,req.body.birth_date,req.body.picture_url]);
  res.json('ok!');
  }


  module.exports = {listUsers,profile,addUser};