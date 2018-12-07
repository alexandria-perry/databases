CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userId int NOT NULL,
  message varchar(200),
  roomname varchar(20),
  PRIMARY KEY(ID)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  PRIMARY KEY(ID)
);

-- CREATE TABLE rooms (
--   id int NOT NULL AUTO_INCREMENT,
--   name varchar(20),
--   PRIMARY KEY(id)
-- );

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
