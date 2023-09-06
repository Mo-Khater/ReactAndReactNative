import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const server=express();
const PORT =process.env.PORT;
try{
    mongoose.connect(process.env.URL);
    }
    catch(error){
        console.log(error);
    };
    server.use(express.json());
    // for testing
    server.get('/', (req, res) => {
    res.send('Hello World!');});
    server.listen(PORT,err=>{
        if(err) return console.error(err);
        console.log(`Server listening at port ${PORT}`);
    });
