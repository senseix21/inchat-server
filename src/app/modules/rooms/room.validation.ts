import { z } from "zod";

const createRoom = z.object({
    body: z.object({
        name: z.string({
            required_error: "Please enter a room name"
        })
    })
});

export const RoomValidation = {
    createRoom
}