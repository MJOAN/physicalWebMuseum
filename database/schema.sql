
CREATE DATABASE physicalweb_museum;
<<<<<<< HEAD
USE physicalweb_museum;

=======

USE physicalweb_museum;
>>>>>>> d0621f100e3270c2c3f876b9ea4ee48b4f762f11

CREATE TABLE exhibit
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	title varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
<<<<<<< HEAD
	created_date TIMESTAMP NOT NULL,
	medium varchar(255) NOT NULL,
	image LONGBLOB NOT NULL,
=======
	medium varchar(255) NOT NULL,
	created_date TIMESTAMP NOT NULL,
	iamge LONGBLOB NOT NULL,
>>>>>>> d0621f100e3270c2c3f876b9ea4ee48b4f762f11
	PRIMARY KEY (id)
);
