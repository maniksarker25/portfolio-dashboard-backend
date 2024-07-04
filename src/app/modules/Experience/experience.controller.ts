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

export const experienceControllers = {
  createExperience,
};
