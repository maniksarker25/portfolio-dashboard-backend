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
const getAllSkill = catchAsync(async (req, res) => {
  const result = await skillServices.getAllSkillFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill retrieved successfully!',
    data: result,
  });
});
const deleteSkill = catchAsync(async (req, res) => {
  const result = await skillServices.deleteSkillFromDB(req?.params?.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill deleted successfully!',
    data: result,
  });
});

export const skillControllers = {
  createSkill,
  getAllSkill,
  deleteSkill,
};
