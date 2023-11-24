import { TUser } from './user.interface';
import { UserModel } from './user.shemaModel';

const createUserIntoDB = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsers = async () => {
  const result = await UserModel.find();
  return result;
};
const findSingleUser = async (id: number) => {
  const query = { userId: id };
  const result = await UserModel.findOne(query);
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsers,
  findSingleUser,
};
