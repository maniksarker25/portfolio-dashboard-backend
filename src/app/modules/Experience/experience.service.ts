import Experience from './experience.model';
import { TExperience } from './experience.type';

const createExperienceIntoDB = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

export const experienceServices = {
  createExperienceIntoDB,
};
