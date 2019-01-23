create table users (
	id int AUTO_INCREMENT PRIMARY KEY,
	loginname varchar(10) NOT NULL,
	password varchar(255) NOT NULL,
	roleID int NOT NULL,
	FOREIGN KEY(roleID) REFERENCES roles(id)
);

create table roles (
	id int AUTO_INCREMENT PRIMARY KEY,
	rolename varchar(50)
);