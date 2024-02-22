

CREATE OR ALTER PROCEDURE registerUser(
    @user_id VARCHAR(255),
    @name VARCHAR(255),
    @email VARCHAR(255),
    @nationalId VARCHAR(255),
    @phoneNumber VARCHAR(20),
    @dateOfBirth DATE,
    @location VARCHAR(255),
    @gender VARCHAR(10),
    @nationality VARCHAR(255),
    @occupation VARCHAR(255),
    @password VARCHAR(255)
)
AS
BEGIN
    INSERT INTO users (user_id, name, email, nationalId, phoneNumber, dateOfBirth, location, gender, nationality, occupation, password)
    VALUES (@user_id, @name, @email, @nationalId, @phoneNumber, @dateOfBirth, @location, @gender, @nationality, @occupation, @password);
END 

SELECT * FROM users
