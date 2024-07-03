import { Schema, model } from 'mongoose';
import { TProject } from './projects.type';

const projectSchema = new Schema<TProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologyUsed: { type: String, required: true },
  frontEndRepo: { type: String, required: true },
  backEndRepo: { type: String, required: true },
  liveLink: { type: String },
  images: { type: [String], default: [] },
  duration: { type: String },
  featureOne: { type: String, required: true },
  featureTwo: { type: String, required: true },
  featureThree: { type: String, required: true },
  note: { type: String },
});

const Project = model<TProject>('Project', projectSchema);

export default Project;
