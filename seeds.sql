-- employee
INSERT INTO employee (first_name, last_name, job_title)
VALUES 
('Tyrone', 'Wilkinson', 'Manager'),
('Milo', 'Boone', 'Accountant'),
('Cody', 'Redmond', 'Engineer'),
('Jun', 'Davison', 'Sales');

-- Role
INSERT INTO role (title, salary, department)
VALUES
('Manager', 50000, 'General_Management'),
('Accountant', 50000, 'Finance'),
('Engineer', 50000, 'Operations'),
('Sales', 50000, 'Sales');


-- Department
INSERT INTO department (name)
VALUES
('General_Management'),
('Finance'),
('Operations'),
('Training');
