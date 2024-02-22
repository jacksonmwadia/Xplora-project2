import { Request, Response } from "express";
import { v4 } from 'uuid';
import { sqlConfig } from "../config/sql.config";
import mssql from "mssql";
import { registerTripSchema } from "../validators/trip.validators";
import { Booking } from "../interface/bookings";

export const createBooking = async (req: Request, res: Response) => {
    try {
        const id = v4();
        const { national_id, start_date, end_date, no_of_participants, trip_id, is_cancelled }: Booking = req.body;
/* 
        let { error } = registerTripSchema.validate(req.body);

        if (error) {
            return res.status(404).json({
                error: error.details[0].message
            });
        }
 */
        const pool = await mssql.connect(sqlConfig);
        let results = (await pool.request()
            .input("booking_id", mssql.VarChar, id)
            .input("national_id", mssql.VarChar, national_id)
            .input("start_date", mssql.Date, start_date)
            .input("end_date", mssql.Date, end_date)
            .input("no_of_participants", mssql.VarChar, no_of_participants)
            .input("trip_id", mssql.VarChar, trip_id)
            .input("is_cancelled", mssql.Bit, is_cancelled)
            .execute("CreateBooking")).rowsAffected;
        
        return res.json({
            message: "Booking Created Successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const getBookings = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let allBookings = (await pool.request().execute("GetAllBookings")).recordset;

        return res.status(200).json({
            bookings: allBookings
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const getOneBooking = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const pool = await mssql.connect(sqlConfig);
        let booking = (await pool.request().input("booking_id", id).execute("getOneBooking")).recordset;

        return res.json({ booking });
    } catch (error) {
        return res.json({ error });
    }
}

export const updateBooking = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { national_id, start_date, end_date, no_of_participants, trip_id, is_cancelled }: Booking = req.body;

        const pool = await mssql.connect(sqlConfig);
        let results = (await pool.request()
            .input("booking_id", mssql.VarChar, id)
            .input("national_id", mssql.VarChar, national_id)
            .input("start_date", mssql.Date, start_date)
            .input("end_date", mssql.Date, end_date)
            .input("no_of_participants", mssql.Int, no_of_participants)
            .input("trip_id", mssql.VarChar, trip_id)
            .input("is_cancelled", mssql.Bit, is_cancelled)
            .execute("updateBooking")).rowsAffected;

        return res.status(200).json({
            message: "Booking Updated Successfully"
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const deleteBooking = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const pool = await mssql.connect(sqlConfig);
        let results = (await pool.request().input("booking_id", mssql.VarChar, id).execute("deleteBooking")).rowsAffected;

        if (results[0] == 0) {
            return res.status(201).json({
                error: "Booking not found"
            });
        } else {
            return res.status(200).json({
                message: "Booking deleted successfully"
            });
        }
    } catch (error) {
        return res.json({ error });
    }
}
