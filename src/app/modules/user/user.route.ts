import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/create-user', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:userId', UserController.findUser);
router.put('/:userId', UserController.updateUser);
router.put('/:userId/orders', UserController.updateOrders);
router.delete('/:userId', UserController.deleteUser);

export const UserRoutes = router;
