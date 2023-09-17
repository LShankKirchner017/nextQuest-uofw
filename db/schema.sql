DROP DATABASE IF EXISTS gamer_db;
CREATE DATABASE gamer_db;

USE gamer_db;

-- CREATE TABLE user (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(30) NOT NULL,
--     password VARCHAR(30) NOT NULL,
--     twitch VARCHAR(30),
--     PRIMARY KEY(id)

-- );

-- CREATE TABLE gamelist (
--     id INT NOT NULL AUTO_INCREMENT,
--     game VARCHAR(50) NOT NULL,
--     genre VARCHAR(30),
--     difficulty ENUM("easy", "medium", "hard")
--     length VARCHAR(30),
--     is_priority BOOLEAN DEFAULT 0,
--     date_created DATE 

-- )