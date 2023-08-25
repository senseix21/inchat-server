import express from 'express';
import { hashPassword } from '../../middlewares/hashPassword';
import validateRequest from '../../middlewares/validateRequest';
import { UserControler } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post('/create',
    hashPassword,
    validateRequest(UserValidation.createUser),
    UserControler.create);

router.get('/',
    UserControler.getAll);

export const UserRoutes = router;