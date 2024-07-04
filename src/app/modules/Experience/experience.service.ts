import Experience from './experience.model';
import { TExperience } from './experience.type';

const createExperienceIntoDB = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getAllExperienceFromDB = async () => {
  const result = await Experience.find();
  return result;
};
const deleteExperienceFromDB = async (id: string) => {
  const result = await Experience.findByIdAndDelete(id);
  return result;
};
export const experienceServices = {
  createExperienceIntoDB,
  getAllExperienceFromDB,
  deleteExperienceFromDB,
};
