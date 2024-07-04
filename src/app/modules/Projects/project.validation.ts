import { z } from 'zod';

const createProjectValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    shortDescription: z.string({
      required_error: 'Short description is required',
    }),
    technologyUsed: z.string({
      required_error: 'Technology used is required',
    }),
    frontEndRepo: z.string({
      required_error: 'Frontend repo is required',
    }),
    backEndRepo: z.string({
      required_error: 'Backend repo is required',
    }),
    liveLink: z.string().optional(),
    images: z.array(z.string()).default([]),
    featureOne: z.string({
      required_error: 'Feature one is required',
    }),
    featureTwo: z.string({
      required_error: 'Feature two is required',
    }),
    featureThree: z.string({
      required_error: 'Feature three is required',
    }),
    note: z.string().optional(),
  }),
});

const updateProjectValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    frontEndTech: z.string().optional(),
    backEndTech: z.string().optional(),
    frontEndRepo: z.string().optional(),
    backEndRepo: z.string().optional(),
    liveLink: z.string().optional(),
    image: z.string().optional(),
    duration: z.string().optional(),
  }),
});

const ProjectValidations = {
  createProjectValidation,
  updateProjectValidation,
};

export default ProjectValidations;
