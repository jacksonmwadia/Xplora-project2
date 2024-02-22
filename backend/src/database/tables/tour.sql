CREATE TABLE trips (
    trip_id VARCHAR(300) PRIMARY KEY,
    trip_name VARCHAR(255),
    image VARCHAR(MAX),
    location VARCHAR(255),
    duration VARCHAR(255), 
    start_date DATE,
    end_date DATE,
    category VARCHAR(50),
    description TEXT,
    price VARCHAR(255) 
);

SELECT * FROM trips;

 drop table trips;