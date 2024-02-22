export interface Trip {
    trip_id: string;
    trip_name: string;
    image: string;
    location: string;
    duration: number; 
    start_date: Date;
    end_date: Date;
    category: string;
    description: string;
    price: string; 
}