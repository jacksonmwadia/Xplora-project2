CREATE PROCEDURE DeleteBooking
    @booking_id VARCHAR(36)
AS
BEGIN
    -- Check if the booking exists
    IF EXISTS (SELECT 1 FROM Bookings WHERE booking_id = @booking_id)
    BEGIN
        -- Delete the booking
        DELETE FROM Bookings WHERE booking_id = @booking_id;

        SELECT 'Booking Deleted Successfully' AS Result;
    END
    ELSE
    BEGIN
        SELECT 'Error: Booking not found' AS Result;
    END
END;