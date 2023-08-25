import express from 'express';
import { UserControler } from './user.controller';

const router = express.Router();

router.post('/create', UserControler.create);
router.get('/', UserControler.getAll);

export const UserRoutes = router;