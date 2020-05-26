DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS challenges;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS follows;

PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id INTEGER NOT NULL PRIMARY KEY,
  login TEXT,
  password TEXT,
  picture_url TEXT,
  remember INTEGER
);

CREATE TABLE posts (
    id INTEGER NOT NULL PRIMARY KEY,
    user_id INTEGER,
    picture_url  VARCHAR,
    challenge_id INT,
    creation_date INT

);

CREATE TABLE challenges (
    id INTEGER NOT NULL PRIMARY KEY,
    startday INT,
    starthour INT,
    duration INT,
    type VARCHAR,
    describe VARCHAR
);


CREATE TABLE likes (
  id INTEGER NOT NULL PRIMARY KEY,
  user_id INTEGER,
  post_id INTEGER
  
);

CREATE TABLE follows (
    id INTEGER NOT NULL PRIMARY KEY,
    id_followedUser INT,
    id_followingUser INT
);

INSERT INTO users (login, password, picture_url, remember)
VALUES
    ("ADMIN", "ADMIN", "", 0),
    ("Camille", "1234", "", 0);

INSERT INTO posts (user_id, challenge_id, picture_url, creation_date)
VALUES
    (1, 1,"", 1),
    (1, 2,"", 2);

INSERT INTO challenges (startday, starthour, duration, type, describe)
VALUES
    (1, 1, 1,"Dessin", "Test ta créativité"),
    (2, 1, 1,"Dessin", "Capture tes meilleurs moments");
    
INSERT INTO likes (user_id, post_id)
VALUES
    (1, 1),
    (1, 2);

INSERT INTO follows (id_followedUser,id_followingUser)
VALUES
    (1, 2);
    

