import { z } from 'zod';

const createSkillValidationSchema = z.object({
  body: z.object({
    image: z.string({ required_error: 'Image is required' }),
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    }),
    category: z.enum(['expert', 'comfortable', 'familiar', 'tools']),
  }),
});

export const skillValidations = {
  createSkillValidationSchema,
};
