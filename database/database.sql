CREATE DATABASE ng_game_db;
USE ng_game_db;
CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

USE ng_game_db;
CREATE TABLE gamers(
    id_gamer int (10) not null auto_increment primary key,
    name_gamer varchar (50),
    username_gamer varchar (20),
    password_gamer varchar (20),
    photo_gamer varchar (100),
    age_gamer int (2)

)
DESCRIBE games;
