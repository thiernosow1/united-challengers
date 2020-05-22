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
    picture_url  VARCHAR,
    video_url VARCHAR,
    user_id INTEGER,
    challenge_id INT,
    date DATETIME

);

CREATE TABLE challenges (
    id INTEGER NOT NULL PRIMARY KEY,
    startday DATETIME,
    starthour INT,
    duration INT,
    type VARCHAR,
    desc VARCHAR
);


CREATE TABLE likes (
  id INTEGER NOT NULL PRIMARY KEY,
  user_id INTEGER,
  posts_id INTEGER
  
);

CREATE TABLE follows (
    id INTEGER NOT NULL PRIMARY KEY,
    id_followedUser INT,
    id_followingUser INT
);

INSERT INTO users (login, password, picture_url, remember)
VALUES
    ("ADMIN", "ADMIN", "", 0);
    