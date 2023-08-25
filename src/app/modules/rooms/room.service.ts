import { PrismaClient, Room, User } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";

const prisma = new PrismaClient();


const create = async (data: Room): Promise<Room> => {
    const result = await prisma.room.create({
        data
    })
    return result;
}

const addUserToRoom = async (userId: number, roomId: number): Promise<User> => {
    const transaction = await prisma.$transaction([
        prisma.user.findUnique({ where: { id: userId } }),
        prisma.room.findUnique({ where: { id: roomId } })
    ])

    const user = transaction[0];
    const room = transaction[1];

    if (!user || !room) {
        throw new ApiError(httpStatus.BAD_REQUEST, "User or room not found")
    }

    const updateUser = await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            rooms: {
                connect: { id: roomId }
            },

        },
        include: {
            rooms: true
        }
    })

    return updateUser;
}

const getAll = async (): Promise<Room[]> => {
    const result = await prisma.room.findMany({
        include: {
            users: {
                include: {
                    messages: true
                }
            },
        }
    })
    return result;
}

export const RoomService = {
    create,
    getAll,
    addUserToRoom
}