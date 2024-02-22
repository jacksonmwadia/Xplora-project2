CREATE PROCEDURE updateTrip
    @trip_id VARCHAR(255),
    @trip_name VARCHAR(255),
    @image VARCHAR(MAX),
    @location VARCHAR(255),
    @duration INT,
    @start_date DATE,
    @end_date DATE,
    @category VARCHAR(50),
    @description TEXT,
    @price VARCHAR(255)
AS
BEGIN
    UPDATE trips
    SET
        trip_name = @trip_name,
        image = @image,
        location = @location,
        duration = @duration,
        start_date = @start_date,
        end_date = @end_date,
        category = @category,
        description = @description,
        price = @price
    WHERE trip_id = @trip_id;
END;
