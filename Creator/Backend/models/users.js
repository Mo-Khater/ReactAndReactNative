import { Schema, model } from 'mongoose';
import Joi from'joi';

const userSchema = new Schema({
    fullname: {
    type: String,
    required: true,
    },
    email: {
    type: String,
    required: true,
    unique: true,
    },
    password: {
    type: String,required: true,
    select: false,
    }
});
const User = model('User', userSchema);

const signUpSchema = Joi.object({
    fullname: Joi.string().min(3).max(25).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(32).required(),
   });

   const logInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(16).required(),
   });

export default { User, signUpSchema, logInSchema };