CREATE TABLE Bookings (
    booking_id VARCHAR(300) PRIMARY KEY,
    national_id VARCHAR(20) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    no_of_participants VARCHAR(20) NOT NULL,
    trip_id VARCHAR(300) NOT NULL,
    is_cancelled BIT NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trips(trip_id)
);

select * from Bookings

drop table Bookings
