import { Schema, model, now } from "mongoose";
import Joi, { Number } from "joi";

const resumeSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  LinkedIN: {
    type: String,
    required: true,
  },
  PortfolioLink: {
    type: String,
    required: true,
  },
  PhoneNO: {
    type: Number,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  gradYear: {
    type: Number,
    required: true,
  },
  projects: {
    type: [String],
  },
  progSkills: {
    type: [String],
  },
  languages: {
    type: [String],
  },
  hobbies: {
    type: [String],
  },
  experience: {
    type: [{ jobTitle: String, jobDesc: String, from: Number, to: Number }], // i dont know if this will work tell me if it needs changes
  },
});
const Resume =model("Resume",resumeSchema);
const resumeValidate=Joi.object({
fullname:Joi.string().min(3).max(30).required(),
address:Joi.string().min(3).max(100).required,
email:Joi.string().email.required,
LinkedIN:Joi.link().required,
PortfolioLink:Joi.link().required,
PhoneNO:Joi.number().required,
degree:Joi.string.min(1).max(50).required,
institution:Joi.string.min(1).max(50).required,
gradYear:Joi.number().min(4).max(4).required,
});

export{Resume,resumeValidate};
