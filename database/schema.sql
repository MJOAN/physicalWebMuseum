DROP DATABASE if exists physicalweb_museum;
CREATE DATABASE physicalweb_museum;
USE physicalweb_museum;


--artist hasMany(artwork) 
--artwork belongsTo(artist)
--artwork hasMany(feedback)
--feedback belongsTo(artwork)

CREATE TABLE artist
(
    artist id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE artwork
(
    artist id int NOT NULL AUTO_INCREMENT,
    artwork id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    created_date VARCHAR (255) NOT NULL,
    medium VARCHAR(20) NOT NULL,
    feedback TEXT NOT NULL, 
    imgURL VARCHAR(1000) NOT NULL,
    beaconID varchar(1000) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE feedback
(
    artwork id int NOT NULL AUTO_INCREMENT,
    created_date VARCHAR (255) NOT NULL,
    feedback TEXT NOT NULL, 
    PRIMARY KEY (id)
);