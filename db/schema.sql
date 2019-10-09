CREATE DATABASE burger_db;

USE DATABASE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO-INCREMENT,
    burger_name VARCHAR(150) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)