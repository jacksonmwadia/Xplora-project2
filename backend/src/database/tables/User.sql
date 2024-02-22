USE xplora

CREATE TABLE users (
    user_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    nationalId VARCHAR(255) NOT NULL UNIQUE,
    phoneNumber VARCHAR(20),
    dateOfBirth DATE,
    location VARCHAR(255),
    gender VARCHAR(10),
    nationality VARCHAR(255),
    occupation VARCHAR(255),
    password VARCHAR(255),
    isDeleted BIT DEFAULT 0,
    isWelcome BIT DEFAULT 0,
    isAdmin BIT DEFAULT 0
);

ALTER TABLE users ADD password BIT DEFAULT 0

SELECT * FROM users;
UPDATE users SET isDeleted = 0

DROP TABLE users

ALTER TABLE users
ADD isAdmin BIT DEFAULT 0;

/* UPDATE users
SET isAdmin = 0
WHERE isAdmin IS NULL;

UPDATE users
SET isAdmin = 1
WHERE name = 'Jackson Isa';

 */