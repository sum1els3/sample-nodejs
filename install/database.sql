CREATE DATABSE user_db;

USE user_db;

CREATE TABLE users_tb(
	userID int IDENTITY(1,1) NOT NULL,
	username varchar(30) NOT NULL,
	password varchar(30) NOT NULL,
	active bit DEFAULT 0 NOT NULL,
	deleted bit DEFAULT 0 NOT NULL
);
