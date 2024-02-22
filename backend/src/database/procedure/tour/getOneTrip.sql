CREATE PROCEDURE getOneTrip
    @trip_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM trips WHERE trip_id = @trip_id;
END;
