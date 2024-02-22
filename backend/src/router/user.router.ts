import { Router } from "express";
import { createUser, deleteUser, getOneUser, getUsers, updateUser } from "../contollers/user.contoller";
import { verifyToken } from "../Middleware/verifyToken";

const userRoute = Router()
userRoute.post('/',createUser)
userRoute.get('/',verifyToken,getUsers)
userRoute.put('/update/:id',verifyToken, updateUser)
userRoute.delete('/delete/:id', verifyToken, deleteUser)
userRoute.get('/:id', verifyToken, getOneUser)

export default userRoute