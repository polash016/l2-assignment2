import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:userId', UserController.findUser);
router.put('/:userId', UserController.updateUser);
router.put('/:userId/orders', UserController.updateSingleOrder);
router.get('/:userId/orders', UserController.getOrderById);
router.get('/:userId/orders/total-price', UserController.totalOrderPrice);
router.delete('/:userId', UserController.deleteUser);

export const UserRoutes = router;
