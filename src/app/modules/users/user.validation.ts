import { z } from "zod";

const createUser = z.object({
    body: z.object({
        username: z.string({
            required_error: "Please enter a username"
        }),
        password: z.string({
            required_error: "Please enter a password"
        })
    })
})

export const UserValidation = {
    createUser
}