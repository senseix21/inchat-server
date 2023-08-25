import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";

const create = catchAsync(async (req, res) => {
    const result = await UserService.create(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User created successfully",
        data: result
    })
})
const getAll = catchAsync(async (req, res) => {
    const result = await UserService.getAll();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Users fetched successfully",
        data: result
    })
});

export const UserControler = {
    create,
    getAll
}