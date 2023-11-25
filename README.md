
# L-2 Assignment 2

###  Overview

In this Apllication we can create user, find user, delete user, add orders in the user data, find order data, see total price of orders & etc.


### Features

* Create User Data.
* Get All Users Data.
* Find Specific User By Id.
* Update Specific User's Details By Id.
* Add Orders In Specific User's Data.
* Get Order Details of an Specific User By Id.
* Get Total Price Of an specific User's Orders.
* Delete a specific Users

### Usage

URL = https://l2-assignment-2-bice.vercel.app/

#### Create User

```http
  POST /api/users
```

#### Get all users

```http
  GET /api/users
```

#### Get Specific User's Details

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `number` | **Required**. Id of item to fetch |

#### Update Specific User's Details

```http
  POST /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `number` | **Required**. Id of item and Updated Data |

#### Update Specific User's Orders Data

```http
  POST /api/users/${id}/orders
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `number` | **Required**. Id of item & order data |

#### Get Specific User's Order Details

```http
  GET /api/users/${id}/orders
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `number` | **Required**. Id of item to fetch |

#### Get Total Price of an Specific User's Orders

```http
  GET /api/users/${id}/orders/total-price
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `number` | **Required**. Id of item to fetch |

#### Delete an Specific User's Data

```http
  DELETE /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `number` | **Required**. Id of item to Delete |

