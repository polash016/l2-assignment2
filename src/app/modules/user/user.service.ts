import { TUser } from './user.interface';
import { User } from './user.shemaModel';

// create user
const createUserIntoDB = async (user: TUser) => {
  if (await User.isUserExists(user.userId)) {
    throw new Error('User already exists');
  }

  const result = await User.create(user);
  return result;
};

//get all user
const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

//find specific user by id
const findSingleUser = async (id: number) => {
  if ((await User.isUserExists(id)) === null) {
    throw new Error("User Doesn't exists");
  }
  const query = { userId: id };
  const result = await User.findOne(query);
  return result;
};

// update specific user by id
const updateSingleUser = async (id: number, data: TUser) => {
  if ((await User.isUserExists(id)) === null) {
    throw new Error("User Doesn't exists");
  }
  const query = { userId: id };
  const result = await User.updateOne(query, data, { new: true });
  return result;
};

// delete specific user by id
const deleteUserFromDB = async (id: number) => {
  if ((await User.isUserExists(id)) === null) {
    throw new Error("User Doesn't exists");
  }
  const result = await User.updateOne({ userId: id }, { isDeleted: true });
  return result;
};

// update specific user by id
const updateOrders = async (id: number, data: TUser) => {
  if ((await User.isUserExists(id)) === null) {
    throw new Error("User Doesn't exists");
  }
  const query = { userId: id };
  if ((await User.isUserExists(id)) === null) {
    throw new Error("User Doesn't exists");
  }
  const result = await User.findOneAndUpdate(query, {
    $push: { orders: data },
  });
  return result;
};

// get specific user's order details by id
const getOrder = async (id: number) => {
  if ((await User.isUserExists(id)) === null) {
    throw new Error("User Doesn't exists");
  }
  const query = { userId: id };
  const result = await User.findOne(query);
  return result;
};

// get total price of an user
const totalPrice = async (id: number) => {
  if ((await User.isUserExists(id)) === null) {
    throw new Error("User Doesn't exists");
  }
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
