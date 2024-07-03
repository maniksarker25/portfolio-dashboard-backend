import express from 'express';
import AuthGuard from '../../middlewares/AuthGuard';
import validateRequest from '../../middlewares/validateRequest';
import AuthControllers from './auth.controller';
import { authValidations } from './auth.validation';
const router = express.Router();

router.post(
  '/login',
  // validateRequest(authValidations.loginValidationSchema),
  AuthControllers.login,
);

router.post(
  '/change-password',
  AuthGuard(),
  validateRequest(authValidations.changePasswordValidationSchema),
  AuthControllers.changePassword,
);

const AuthRoutes = router;

export default AuthRoutes;
