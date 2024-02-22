create PROCEDURE updateUser(    
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
    @password VARCHAR(255))
AS 
BEGIN
  UPDATE users
    SET 
        name = @name,
        email = @email,
        nationalId = @nationalId,
        phoneNumber = @phoneNumber,
        dateOfBirth = @dateOfBirth,
        location = @location,
        gender = @gender,
        nationality = @nationality,
        occupation = @occupation
    WHERE user_id = @user_id;

END