import { Schema, model } from 'mongoose';
import { TSkill } from './skill.type';

const skillSchema = new Schema<TSkill>(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['expert', 'comfortable', 'familiar', 'tools'],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Skill = model('Skill', skillSchema);

export default Skill;
