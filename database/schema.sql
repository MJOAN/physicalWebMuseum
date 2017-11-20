
CREATE DATABASE physicalweb_museum;
USE physicalweb_museum;


CREATE TABLE exhibit
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	title varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
	created_date TIMESTAMP NOT NULL,
	medium varchar(255) NOT NULL,
	image LONGBLOB NOT NULL,
	PRIMARY KEY (id)
);
