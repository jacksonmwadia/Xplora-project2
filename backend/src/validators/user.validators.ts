import joi from "joi"
export const registerUserSchema = joi.object({
    
    name: joi.string().max(255),
    email: joi.string().max(255).email(),
    nationalId: joi.string().max(255),
    phoneNumber: joi.string().max(20),
    dateOfBirth: joi.date(),
    location: joi.string().max(255),
    gender: joi.string().max(10),
    nationality: joi.string().max(255),
    occupation: joi.string().max(255),
    password: joi.string().max(255)
})