import { z } from 'zod';

const orderSchema = z.object({
  productName: z.string(),
  price: z.number().positive('Price must be a positive number'),
  quantity: z.number().int().positive('Quantity must be a positive integer'),
});

const addressSchema = z.object({
  street: z.string().trim(),
  city: z.string().trim(),
  country: z.string().trim(),
});

const fullNameSchema = z.object({
  firstName: z
    .string()
    .min(3)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  lastName: z.string(),
});

const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: fullNameSchema,
  age: z.number().positive('Age must be a positive number'),
  email: z.string().email('Invalid email format').trim(),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: addressSchema,
  orders: z.array(orderSchema).optional(),
  isDeleted: z.boolean().default(false),
});

export default userValidationSchema;
