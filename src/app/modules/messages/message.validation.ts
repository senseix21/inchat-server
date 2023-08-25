import { z } from "zod";

const createMessage = z.object({
    body: z.object({
        content: z.string({
            required_error: "Please enter a valid message",
        }),
        sentById: z.number({
            required_error: ""
        }),
        roomId: z.number({}),
    })
});

export const MessageValidation = {
    createMessage
}