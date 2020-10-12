DROP DATABASE IF EXISTS businessDB;
CREATE DATABASE businessDB;
USE businessDB;

DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

-- Employee Table
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    role_id INTEGER UNSIGNED,
    manager_name VARCHAR(30)
);

-- Role Table
CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary VARCHAR(30),
    department VARCHAR(30)
);


-- Department TABLE 
CREATE TABLE department (
     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);
