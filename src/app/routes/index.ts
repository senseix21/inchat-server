import express from 'express';
import { MessageRoutes } from '../modules/messages/message.route';
import { RoomRoutes } from '../modules/rooms/room.route';
import { UserRoutes } from '../modules/users/user.route';


const router = express.Router();

const moduleRoutes = [
    { path: '/user', route: UserRoutes },
    { path: '/room', route: RoomRoutes },
    { path: '/message', route: MessageRoutes },

];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;