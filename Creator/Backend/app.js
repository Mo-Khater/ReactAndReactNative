import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ResumeData from "./models/resume.js";
import cors from 'cors';
import authController from './Controllers/auth.controller.js';
import authMiddleware from './middleware/auth.middleware.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors()); // enable server to recieve the request from another port
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.URL)
  .then(() => {
    console.log('Database connected');
  }).catch((error) => {
    console.error(error);
  });


app.post('/resume/save', authMiddleware, (req, res) => {

  const data = req.body;
  console.log(data);
  delete data.token;
  data.userID = req.user._id;
  const resumeData = new ResumeData(data);
  console.log(resumeData);

  resumeData.save()
    .then(() => {
      res.status(200).send('Data saved successfully!');
    })
    .catch(error => {
      res.status(500).send('Error saving data: ' + error);
    });
});
app.post('/register', authController.signup);
app.post('/login', authController.login);
app.get('/check', authMiddleware, (req, res) => {
  return res.status(200).json({ status: 'success' });
})

app.get('/resume/history', authMiddleware, async (req, res) => {

  const data = await ResumeData.find({ userID: req.user._id }).select({ _id: 0, userID: 0, __v: 0 });
  res.status(200).json({ data, user: req.user });

})


app.listen(3002, () => {
  console.log('Server is running on port 3002');
});