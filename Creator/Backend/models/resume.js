import mongoose from 'mongoose';

const resumeDataSchema = new mongoose.Schema({
  userID: String,
  fullName: String,
  address: String,
  Phone: String,
  email: String,
  LinkedIn: String,
  Protfolio: String,
  Degree: String,
  Institution: String,
  Graduation: String,
  Projects: [String], 
  Hobbies: [String],
  Programming: [String],
  languages: [String],
  Experince: [Object],
});

const ResumeData = mongoose.model('ResumeData', resumeDataSchema);

export default ResumeData;