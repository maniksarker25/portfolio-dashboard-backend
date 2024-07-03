import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email!' }),
    password: z.string(),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string(),
    newPassword: z.string(),
  }),
});

export const authValidations = {
  loginValidationSchema,
  changePasswordValidationSchema,
};
