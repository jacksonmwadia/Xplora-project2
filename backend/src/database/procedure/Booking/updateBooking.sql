CREATE PROCEDURE UpdateBooking
    @booking_id VARCHAR(36),
    @national_id VARCHAR(20),
    @start_date DATE,
    @end_date DATE,
    @no_of_participants VARCHAR(20),
    @trip_id VARCHAR(36),
    @is_cancelled BIT
AS
BEGIN
    -- Check if the booking exists
    IF EXISTS (SELECT 1 FROM Bookings WHERE booking_id = @booking_id)
    BEGIN
        -- Update the booking details
        UPDATE Bookings
        SET national_id = @national_id,
            start_date = @start_date,
            end_date = @end_date,
            no_of_participants = @no_of_participants,
            trip_id = @trip_id,
            is_cancelled = @is_cancelled
        WHERE booking_id = @booking_id;

        SELECT 'Booking Updated Successfully' AS Result;
    END
    ELSE
    BEGIN
        SELECT 'Error: Booking not found' AS Result;
    END
END;
