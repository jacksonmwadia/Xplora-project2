export interface Booking {
    booking_id: string;
    national_id: string;
    start_date: Date;
    end_date: Date;
    no_of_participants: number;
    trip_id: string;
    is_cancelled: boolean;
}