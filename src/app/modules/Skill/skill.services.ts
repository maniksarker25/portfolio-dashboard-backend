import Skill from './skill.model';
import { TSkill } from './skill.type';

const createSkillInfoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getAllSkillFromDB = async () => {
  const result = await Skill.find();
  return result;
};

export const skillServices = {
  createSkillInfoDB,
  getAllSkillFromDB,
};
