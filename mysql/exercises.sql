INSERT INTO `pet_owners`.`users` (firstName, lastName, email, phone) 
VALUES ('John', 'Doe', 'john@doe.com', '0755441166');

SELECT * FROM `pet_owners`.`users`;
SELECT * FROM `pet_owners`.`users` WHERE email = 'tamas@tamaspap.com';
SELECT * FROM `pet_owners`.`users` ORDER BY firstName ASC;

UPDATE `pet_owners`.`users` SET email = 'john@gmail.com' WHERE id = 2;
DELETE FROM `pet_owners`.`users` WHERE id = 2;

INSERT INTO `pet_owners`.`pets` (type, breed, name, userId)
VALUES ('dog', 'pitbull', 'Brutus', 1);

SELECT * FROM `pet_owners`.`pets`;

SELECT users.*, name as petName FROM `pet_owners`.`users`
LEFT JOIN `pet_owners`.`pets` ON users.id = pets.userId


