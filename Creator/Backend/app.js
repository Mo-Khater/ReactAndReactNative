import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ResumeData from "./models/resume.js";
import cors from 'cors'; 

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors()); // enable server to recieve the request from another port
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log('Database connected');
  }).catch((error) => {
    console.error(error);
  });

app.post('/resume/save', (req, res) => {

  const data = req.body;
  console.log(data);
  data.userID = "1";
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

app.get('/resume/history', async (req, res) => {

  const data = await ResumeData.find({ userID: 1 }).select({ _id: 0, userID: 0, __v: 0 });
  res.status(200).json({ data });

})


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});