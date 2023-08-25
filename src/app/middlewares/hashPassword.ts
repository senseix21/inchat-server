import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';

export const hashPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password } = req.body;
        const salt = await bcrypt.genSalt(16);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        next();

    } catch (error) {
        res.status(500).json({ error: 'Password hashing failed' });
    }
};

