CREATE DATABASE IF NOT EXIST node;

USE node;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    image TEXT NOT NULL
)  ENGINE=INNODB;