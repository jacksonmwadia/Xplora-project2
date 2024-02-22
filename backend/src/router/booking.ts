import { Router } from "express";


import { verifyToken } from "../Middleware/verifyToken";
import { createBooking, deleteBooking, getBookings, getOneBooking, updateBooking } from "../contollers/booking.controller";
// import { verifyToken } from "../Middleware/verifyToken";

const bookingRoute = Router()
bookingRoute.post('/',  createBooking)
bookingRoute.get('/',   getBookings)
bookingRoute.put('/update/:id',  updateBooking)
bookingRoute.delete('/delete/:id',  deleteBooking)
bookingRoute.get('/:id',  getOneBooking)


export default bookingRoute;