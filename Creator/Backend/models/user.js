import { Schema, model } from 'mongoose';
import Joi from 'joi';
const userSchema = new Schema({
    fullName:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        // unique: true, // TODO remove <//> when we finish testing
    },
    password:{
        type:String,
        required:true,
        select: false,
    },
});
const User =model('User',userSchema);

// TODO add sign up validation schema 









// TODO add Log in validation schema




export {User};