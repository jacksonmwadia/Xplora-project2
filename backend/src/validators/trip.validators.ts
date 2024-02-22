import joi from "joi";

export const registerTripSchema = joi.object({
    trip_name: joi.string().max(255).required(),
    image: joi.string().max(255),
    location: joi.string().max(255).required(),
    duration: joi.string().max(255).required,
    start_date: joi.date().required(),
    end_date: joi.date().required(),
    category: joi.string().max(50).required(),
    description: joi.string().max(500),
    price: joi.string().max(255).required()
});
