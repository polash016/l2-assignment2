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

const updateOrders = async (id: number, data: TUser) => {
  const query = { userId: id };
  const result = await User.findOneAndUpdate(query, {
    $push: { orders: data },
  });
  return result;
};
const getOrder = async (id: number) => {
  const query = { userId: id };
  const result = await User.findOne(query);
  return result;
};
const totalPrice = async (id: number) => {
  const query = { userId: id };
  const user = await User.findOne(query);
  const totalOrderPrice = user?.orders?.reduce((total, order) => {
    const orderPrice = order.price * order.quantity;
    return total + orderPrice;
  }, 0);
  return totalOrderPrice;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsers,
  findSingleUser,
  updateSingleUser,
  deleteUserFromDB,
  updateOrders,
  getOrder,
  totalPrice,
};
