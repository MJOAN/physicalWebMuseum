DROP DATABASE if exists physicalweb_museum;
CREATE DATABASE physicalweb_museum;
USE physicalweb_museum;


CREATE TABLE artists
(
    name varchar(255) NOT NULL
);

CREATE TABLE artworks
(
	route VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    created_date VARCHAR (255) NOT NULL,
    medium VARCHAR(20) NOT NULL,
    imgURL VARCHAR(1000) NOT NULL,
    videoURL VARCHAR(1000) NOT NULL, 
    audioURL VARCHAR(1000) NOT NULL,
    beaconID varchar(1000) NOT NULL,
    twitterData varchar(1000) NOT NULL
);

CREATE TABLE users
(
    email VARCHAR(1000) NOT NULL,
    password VARCHAR(255) NOT NULL
);
