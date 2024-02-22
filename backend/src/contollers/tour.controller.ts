import { Request, Response } from "express";
import { v4 } from 'uuid';
// import { User } from "../interface/user";
import { sqlConfig } from "../config/sql.config";
import mssql from "mssql";
// import bcrypt from "bcrypt";
// import { registerUserSchema } from "../validators/user.validators";
import { Trip } from "../interface/tour";
import { registerTripSchema } from "../validators/trip.validators";

export const createTrip = async (req: Request, res: Response) => {
    try {
        const id= v4()
        const {trip_name, location, duration, start_date, end_date, image, category, description, price }: Trip = req.body;

        console.log(req.body);
        
        
       

        let { error } = registerTripSchema.validate(req.body);

        if (error) {
            return res.status(404).json({
                error: error.details[0].message
            });
        }

        const pool = await mssql.connect(sqlConfig);
        let results = (await pool.request()
            .input("trip_id", mssql.VarChar, id )
            .input("trip_name", mssql.VarChar, trip_name)
            .input("image", mssql.VarChar, image)  // Assuming empty string for image, adjust as needed
            .input("location", mssql.VarChar, location)
            .input("duration", mssql.VarChar, duration)
            .input("start_date", mssql.Date, start_date)
            .input("end_date", mssql.Date, end_date)
            .input("category", mssql.VarChar, category)
            .input("description", mssql.VarChar, description)
            .input("price", mssql.VarChar, price)
            .execute("registerTrips")).rowsAffected;

        console.log(results);

        return res.json({
            message: "Trip Created Successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const getTrips = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let allTrips = (await pool.request().execute("getAllTrips")).recordset;

        return res.status(200).json({
            trips: allTrips
        });
    } catch (error) {
        return res.json({ error });
    }
}



export const getOneTrip = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const pool = await mssql.connect(sqlConfig);
        let trip = (await pool.request().input("trip_id", id).execute("getOneTrip")).recordset;

        return res.json({ trip });
    } catch (error) {
        return res.json({ error });
    }
}

export const updateTrip = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { trip_id, trip_name, location, duration, start_date, end_date, image, category, description, price}: Trip = req.body;

        const pool = await mssql.connect(sqlConfig);
        let results = (await pool.request()
            .input("trip_id", mssql.VarChar, id)
            .input("trip_name", mssql.VarChar, trip_name)
            .input("location", mssql.VarChar, location)
            .input("image", mssql.VarChar, image)
            .input("duration", mssql.Int, duration)
            .input("start_date", mssql.Date, start_date)
            .input("end_date", mssql.Date, end_date)
            .input("category", mssql.VarChar, category)
            .input("description", mssql.VarChar, description)
            .input("price", mssql.VarChar, price)
            .execute("updateTrip")).rowsAffected;

        return res.status(200).json({
            message: "Trip Updated Successfully"
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const deleteTrip = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const pool = await mssql.connect(sqlConfig);
        let results = (await pool.request().input("trip_id", mssql.VarChar, id).execute("deleteTrip")).rowsAffected;

        if (results[0] == 0) {
            return res.status(201).json({
                error: "Trip not found"
            });
        } else {
            return res.status(200).json({
                message: "Trip deleted successfully"
            });
        }
    } catch (error) {
        return res.json({ error });
    }
}
