import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const create = async (data: User): Promise<User> => {
    const result = await prisma.user.create({
        data
    })
    return result;
}


const getAll = async (): Promise<User[]> => {
    const result = await prisma.user.findMany({})
    return result;
}

export const UserService = {
    create,
    getAll
}