CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE messages (
  id INTEGER PRIMARY KEY,
  userId INTEGER,
  message TEXT,
  roomId INTEGER,
  FOREIGN KEY (userId)
    REFERENCES users(id),
  FOREIGN KEY (roomId)
    REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

