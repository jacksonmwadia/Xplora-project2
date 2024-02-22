CREATE PROCEDURE deleteTrip
    @trip_id VARCHAR(255)
AS
BEGIN
    DELETE FROM trips WHERE trip_id = @trip_id;
END;
