CREATE OR ALTER PROCEDURE registerTrips
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
    INSERT INTO trips (trip_id, trip_name, image, location, duration, start_date, end_date, category, description, price)
    VALUES (@trip_id, @trip_name, @image, @location, @duration, @start_date, @end_date, @category, @description, @price);
END;







