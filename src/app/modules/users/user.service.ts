import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

type IUser = {
    username: string,
    password: string,
    roomname: string
}
const create = async (data: IUser): Promise<User> => {
    const { roomname, username, password } = data;
    const result = await prisma.user.create({
        data: {
            username,
            password,
            rooms: {
                create: {
                    name: roomname
                }
            }

        }
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