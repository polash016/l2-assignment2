import { Model } from 'mongoose';

export type TOrder = {
  productName: string;
  price: number;
  quantity: number;
};

export type TAddress = {
  street: string;
  city: string;
  country: string;
};

export type TFullName = {
  firstName: string;
  lastName: string;
};

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: Array<string>;
  address: TAddress;
  orders?: Array<TOrder>;
  isDeleted: false;
};

export interface UserModel extends Model<TUser> {
  isUserExists(id: number): Promise<TUser | null>;
}
