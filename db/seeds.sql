-- employee
INSERT INTO employee (first_name, last_name, job_title, role_id)
VALUES 
('Tyrone', 'Wilkinson', 'Manager', 1),
('Milo', 'Boone', 'Accountant'),
('Cody', 'Redmond', 'Engineer'),
('Jun', 'Davison', 'Sales');

-- Role
INSERT INTO role (id, title, salary, department_id)
VALUES
(1, 'Manager', 50000, 1),
('Accountant', 50000, 2),
('Engineer', 50000, 'Operations'),
('Sales', 50000, 'Sales');


-- Department
INSERT INTO department (id, name)
VALUES
(1, 'General_Management'),
(2, 'Finance'),
('Operations'),
('Training');
