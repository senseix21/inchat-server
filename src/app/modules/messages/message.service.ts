import { Message, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const create = async (data: Message): Promise<Message> => {
    const { content, sentById, roomId } = data;
    const result = await prisma.message.create({
        data: {
            content,
            sentById,
            roomId
        }
    });
    return result;
}

const getAll = async (roomId: number): Promise<Message[]> => {
    const result = await prisma.message.findMany({
        where: {
            roomId: roomId
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return result;
}


export const MessageService = {
    create,
    getAll
}