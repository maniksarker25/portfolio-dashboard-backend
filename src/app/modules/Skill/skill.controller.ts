import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { skillServices } from './skill.services';

const createSkill = catchAsync(async (req, res) => {
  const result = await skillServices.createSkillInfoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Skill created successfully!',
    data: result,
  });
});

export const skillControllers = {
  createSkill,
};
