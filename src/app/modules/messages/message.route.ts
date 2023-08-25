import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { MessageController } from './message.controller';
import { MessageValidation } from './message.validation';

const router = express.Router();

router.post('/create',
    validateRequest(MessageValidation.createMessage),
    MessageController.create);

router.get("/:roomId",
    MessageController.getMessagesByRoom);


export const MessageRoutes = router;