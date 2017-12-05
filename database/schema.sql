DROP DATABASE if exists physicalweb_museum;
CREATE DATABASE physicalweb_museum;
USE physicalweb_museum;

--artist hasMany(artwork) 
--artwork belongsTo(artist)
--artwork hasMany(feedback)
--feedback belongsTo(artwork)

CREATE TABLE artists
(
    artistId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    artworkId FOREIGN KEY (artworkId) REFERENCES artists (artistId),
    name varchar(255) NOT NULL,
);

CREATE TABLE artworks
(
    artworkId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    artistId FOREIGN KEY (artworkId) REFERENCES artists (artistId),
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    created_date VARCHAR (255) NOT NULL,
    medium VARCHAR(20) NOT NULL,
    feedback TEXT NOT NULL, 
    imgURL VARCHAR(1000) NOT NULL,
    beaconID varchar(1000) NOT NULL
);

CREATE TABLE feedbacks
(
    feedbackId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (feedback_id) REFERENCES artworks (artworkId),
    created_date DATETIME NOT NULL,
    feedback TEXT
);


-- ALTER TABLE artworks ADD COLUMN artist_id int NOT NULL;
-- ALTER TABLE feedbacks ADD COLUMN artwork_id int NOT NULL;