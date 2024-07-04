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

const deleteSkillFromDB = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  return result;
};

export const skillServices = {
  createSkillInfoDB,
  getAllSkillFromDB,
  deleteSkillFromDB,
};
