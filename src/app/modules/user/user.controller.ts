/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const zodValidatedData = userValidationSchema.parse(user);

    const result = await UserServices.createUserIntoDB(zodValidatedData);

    res.status(200).json({
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsers();
    res.status(200).json({
      success: true,
      message: 'Users retrieved Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};
const findUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.findSingleUser(Number(id));
    res.status(200).json({
      success: true,
      message: 'Users fetched Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const { user } = req.body;
    const result = await UserServices.updateSingleUser(Number(id), user);
    res.status(200).json({
      success: true,
      message: 'User Updated Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.deleteUserFromDB(Number(id));
    res.status(200).json({
      success: true,
      message: 'Users Deleted Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const updateSingleOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const product = req.body;
    const result = await UserServices.updateOrders(Number(id), product);
    res.status(200).json({
      success: true,
      message: 'User Updated Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const getOrderById = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.getOrder(Number(id));
    if (!result) {
      res.status(500).json({
        success: false,
        message: 'User Not Found',
      });
    } else if (!result.orders || result?.orders.length === 0) {
      res.status(500).json({
        success: false,
        message: "User Didn't Ordered",
      });
    }
    res.status(200).json({
      success: true,
      message: 'Got Order By Id Successfully',
      data: result?.orders,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const totalOrderPrice = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.totalPrice(Number(id));
    if (!result) {
      res.status(500).json({
        success: false,
        message: 'User Not Found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Total Price Calculated Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const UserController = {
  createUser,
  getUsers,
  findUser,
  deleteUser,
  updateUser,
  updateSingleOrder,
  getOrderById,
  totalOrderPrice,
};
