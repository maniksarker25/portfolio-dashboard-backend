import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { experienceValidations } from './experience.validation';
import { experienceControllers } from './experience.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(experienceValidations.createExperienceValidationSchema),
  experienceControllers.createExperience,
);
router.get('/', experienceControllers.getAllExperience);

export const experienceRoutes = router;
