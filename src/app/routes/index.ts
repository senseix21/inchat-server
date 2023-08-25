import express from 'express';
import { UserRoutes } from '../modules/users/user.route';


const router = express.Router();

const moduleRoutes = [
    { path: '/user', route: UserRoutes }
];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;