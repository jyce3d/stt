use stt_db;

create table authorities (
	id int AUTO_INCREMENT PRIMARY KEY,
	rolename varchar(50)
);
create table users (
	id int AUTO_INCREMENT PRIMARY KEY,
	username varchar(10) NOT NULL,
	password varchar(255) NOT NULL,
	enabled int NOT NULL,
	role_id int NOT NULL,
	FOREIGN KEY(role_id) REFERENCES roles(id)
);

