import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { experienceServices } from './experience.service';

const createExperience = catchAsync(async (req, res) => {
  const result = await experienceServices.createExperienceIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Experience created successfully!',
    data: result,
  });
});

const getAllExperience = catchAsync(async (req, res) => {
  const result = await experienceServices.getAllExperienceFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience retrieved successfully!',
    data: result,
  });
});
const deleteExperience = catchAsync(async (req, res) => {
  const result = await experienceServices.deleteExperienceFromDB(
    req?.params?.id,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience deleted successfully!',
    data: result,
  });
});

export const experienceControllers = {
  createExperience,
  getAllExperience,
  deleteExperience,
};
