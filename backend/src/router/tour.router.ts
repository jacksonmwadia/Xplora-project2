import { Router } from "express";

import { createTrip, deleteTrip, getOneTrip, getTrips, updateTrip } from "../contollers/tour.controller";
import { verifyToken } from "../Middleware/verifyToken";
// import { verifyToken } from "../Middleware/verifyToken";

const tripRoute = Router()
tripRoute.post('/',  createTrip)
tripRoute.get('/', verifyToken,  getTrips)
tripRoute.put('/update/:id', verifyToken, updateTrip)
tripRoute.delete('/delete/:id', verifyToken, deleteTrip)
tripRoute.get('/:id', verifyToken, getOneTrip)


export default tripRoute;