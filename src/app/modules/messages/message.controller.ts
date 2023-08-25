import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { MessageService } from "./message.service";

const create = catchAsync(async (req, res) => {
    const result = await MessageService.create(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Message created successfully",
        data: result
    })
});

const getMessagesByRoom = catchAsync(async (req, res) => {
    const roomId = req.params.roomId;

    const result = await MessageService.getAll(parseInt(roomId));

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Message created successfully",
        data: result
    })
});

export const MessageController = {
    create,
    getMessagesByRoom
}