import { Router } from 'express';
import AuthRoutes from '../modules/Auth/auth.routes';
import BlogRoutes from '../modules/Blog/blog.routes';
import ProfileRoutes from '../modules/Profile/profile.routes';
import projectsRoutes from '../modules/Projects/projects.routes';
import { skillRoutes } from '../modules/Skill/skill.routes';
import { experienceRoutes } from '../modules/Experience/experience.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/projects',
    route: projectsRoutes,
  },
  {
    path: '/skills',
    route: skillRoutes,
  },
  {
    path: '/experiences',
    route: experienceRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
