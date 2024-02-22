-- Stored procedure to create a booking
CREATE or ALTER PROCEDURE CreateBooking
    @booking_id VARCHAR(300), -- Assuming you provide the booking_id externally
    @national_id VARCHAR(20),
    @start_date DATE,
    @end_date DATE,
    @no_of_participants VARCHAR(20),
    @trip_id VARCHAR(300),
    @is_cancelled BIT
AS
BEGIN
    -- Check if the trip_id exists in the Trips table before registering the booking
    IF EXISTS (SELECT 1 FROM trips WHERE trip_id = @trip_id)
    BEGIN
        -- Insert the booking into the Bookings table
        INSERT INTO Bookings (booking_id, national_id, start_date, end_date, no_of_participants, trip_id, is_cancelled)
        VALUES (@booking_id, @national_id, @start_date, @end_date, @no_of_participants, @trip_id, @is_cancelled);

        
    END
    ELSE
    BEGIN
        SELECT 'Error: Trip not found' AS Result;
    END
END;


DROP PROCEDURE CreateBooking;