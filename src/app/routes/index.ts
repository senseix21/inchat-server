import express from 'express';
import { RoomRoutes } from '../modules/rooms/room.route';
import { UserRoutes } from '../modules/users/user.route';


const router = express.Router();

const moduleRoutes = [
    { path: '/user', route: UserRoutes },
    { path: '/room', route: RoomRoutes },

];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;