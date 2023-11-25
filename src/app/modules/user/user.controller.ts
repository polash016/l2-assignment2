import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;

    const result = await UserServices.createUserIntoDB(user);

    res.status(200).json({
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
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
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
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
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'No User Found',
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
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const UserController = {
  createUser,
  getUsers,
  findUser,
  deleteUser,
};
