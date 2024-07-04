import { z } from 'zod';

const createExperienceValidationSchema = z.object({
  body: z.object({
    companyName: z.string({
      required_error: 'Company name is required',
      invalid_type_error: 'Company name must be a string',
    }),
    designation: z.string({
      required_error: 'Designation is required',
      invalid_type_error: 'Designation must be a string',
    }),
    startDate: z.date(),
    endDate: z.date().optional(),
  }),
});

export const experienceValidations = {
  createExperienceValidationSchema,
};
