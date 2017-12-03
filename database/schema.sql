DROP DATABASE if exists physicalweb_museum;
CREATE DATABASE physicalweb_museum;
USE physicalweb_museum;

--artist hasMany(artwork) 
--artwork belongsTo(artist)
--artwork hasMany(feedback)
--feedback belongsTo(artwork)

CREATE TABLE artists
(
    artist_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
);


CREATE TABLE artworks
(
    artwork_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (artwork_id) REFERENCES artists (artist_id),
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    created_date VARCHAR (255) NOT NULL,
    medium VARCHAR(20) NOT NULL,
    feedback TEXT NOT NULL, 
    imgURL VARCHAR(1000) NOT NULL,
    beaconID varchar(1000) NOT NULL,
);

CREATE TABLE feedbacks
(
    feedback_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (feedback_id) REFERENCES artworks (artwork_id)
    created_date VARCHAR (255) NOT NULL,
    feedback TEXT NOT NULL, 
);