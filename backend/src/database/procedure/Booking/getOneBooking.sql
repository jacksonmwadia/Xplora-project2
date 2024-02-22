-- get a single booking by booking_id
CREATE PROCEDURE GetOneBooking
    @booking_id VARCHAR(36)
AS
BEGIN
    SELECT * FROM Bookings WHERE booking_id = @booking_id;
END;
