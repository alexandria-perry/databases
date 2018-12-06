CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  -- id INTEGER PRIMARY KEY,
  username CHAR(20),
  message CHAR(20),
  roomname CHAR(20)
  -- FOREIGN KEY (userId)
  --   REFERENCES users(id),
  -- FOREIGN KEY (roomId)
  --   REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- CREATE TABLE messages (
--   id INTEGER PRIMARY KEY,
--   userId INTEGER,
--   message TEXT,
--   roomId INTEGER,
--   FOREIGN KEY (userId)
--     REFERENCES users(id),
--   FOREIGN KEY (roomId)
--     REFERENCES rooms(id)
-- );

-- CREATE TABLE users (
--   id INTEGER PRIMARY KEY,
--   name CHAR(20)
-- );

-- CREATE TABLE rooms (
--   id INTEGER PRIMARY KEY,
--   name CHAR(20)
-- );
