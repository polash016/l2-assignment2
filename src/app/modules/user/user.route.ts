import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/create-user', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:userId', UserController.findUser);

export const UserRoutes = router;
