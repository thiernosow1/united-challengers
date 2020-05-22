const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
// const challenge = require('./db_function/challenge.js');
// const score = require('./db_function/score.js');
// const vote = require('./db_function/vote.js');
// const user = require('./db_function/user.js');
const user = require('./db_functions/user.js');
const post = require('./db_functions/post.js');
const challenge = require('./db_functions/challenge.js');
console.log();
const db = new sqlite3.Database('./db/challenge');

/*
* Middleware
*/

router
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
    extended: true
}));

router.get("/", (req, res) => {
  res.json("Hello world!");
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////// Challenge //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



router.all("/users", (req, res) => {
    user.list(req, res);
});


router.all("/posts", (req, res) => {
  post.list(req, res);
});


router.all("/challenges", (req, res) => {
  challenge.list(req, res);
});



router.use((req, res) => {
    res.status(400);
    res.json({
    error: "Bad request"
    });
});

// get user info //
router.get('/user/:id', (req, res) => {
    user.profile(req, res);
  });

module.exports = router;