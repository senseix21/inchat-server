import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { RoomControler } from './room.controller';
import { RoomValidation } from './room.validation';

const router = express.Router();

router.post('/create',
    validateRequest(RoomValidation.createRoom),
    RoomControler.create);

router.patch('/:roomId', RoomControler.addUserToRoom)

router.get('/', RoomControler.getAll);

export const RoomRoutes = router;