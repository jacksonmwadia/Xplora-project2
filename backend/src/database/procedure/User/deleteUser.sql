CREATE OR ALTER PROCEDURE deleteUser( @user_id VARCHAR(255))
   
AS 
BEGIN
 /*    DELETE FROM users
    WHERE user_id = @user_id; */

    UPDATE users SET isDeleted = 1 WHERE user_id = @user_id
END;
