import { Schema, model } from 'mongoose';
import { TExperience } from './experience.type';

const experienceSchema = new Schema<TExperience>(
  {
    companyName: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    currentlyWorking: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Experience = model('Experience', experienceSchema);

export default Experience;
