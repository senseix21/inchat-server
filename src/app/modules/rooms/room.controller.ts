import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { RoomService } from "./room.service";

const create = catchAsync(async (req, res) => {
    const result = await RoomService.create(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Room created successfully",
        data: result
    })
});

const addUserToRoom = catchAsync(async (req, res) => {
    const { userId } = req.body;
    const roomId = req.params.roomId;
    const result = await RoomService.addUserToRoom(parseInt(userId), parseInt(roomId));

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Rooms fetched successfully",
        data: result
    });
});


const getAll = catchAsync(async (req, res) => {
    const result = await RoomService.getAll();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User added to Room successfully",
        data: result
    })
});

export const RoomControler = {
    create,
    getAll,
    addUserToRoom
}