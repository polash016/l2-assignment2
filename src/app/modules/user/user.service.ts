import { TUser } from './user.interface';
import { User } from './user.shemaModel';

const createUserIntoDB = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find();
  return result;
};
const findSingleUser = async (id: number) => {
  const query = { userId: id };
  const result = await User.findOne(query);
  return result;
};
const updateSingleUser = async (id: number, data: TUser) => {
  const query = { userId: id };
  const result = await User.updateOne(query, data);
  return result;
};

const deleteUserFromDB = async (id: number) => {
  const result = await User.updateOne({ userId: id }, { isDeleted: true });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsers,
  findSingleUser,
  updateSingleUser,
  deleteUserFromDB,
};
