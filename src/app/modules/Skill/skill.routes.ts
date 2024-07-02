import express from 'express';
import AuthGuard from '../../middlewares/AuthGuard';
import validateRequest from '../../middlewares/validateRequest';
import { skillValidations } from './skill.validation';
import { skillControllers } from './skill.controller';

const router = express.Router();

router.post(
  '/',
  AuthGuard(),
  validateRequest(skillValidations.createSkillValidationSchema),
  skillControllers.createSkill,
);

export const skillRoutes = router;
