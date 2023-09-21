# Product Management System 
### Author : Bollo Aggrey

### Architecture: Vertical Slice

This TypeScript backend project implements the Vertical Slice architecture for enhanced modularity and maintainability. It leverages Node.js, Express.js, and MySQL database with Prisma 2 as the ORM for seamless management of products, categories, and users. Joi is used for robust data validation, while jsonwebtoken provides secure authentication. Designed for scalability and efficiency in product management operations.

---
```
### Sample Project Folder Structure

- src
  ├── modules
  │   ├── Users 📁
  │   ├── Products 📁
  │   │   ├── addProduct 📁
  │   │   │   ├── add.user.command.ts 📄
  │   │   │   ├── add.user.service.ts 📄
  │   │   │   ├── add.user.mediator.ts 📄
  │   │   │   ├── add.user.validation.schema.ts 📄
  │   │   │   └── add.user.handler.ts 📄
  │   │   ├── getProductById 📁
  │   │   ├── updateProduct 📁
  │   │   ├── deleteProduct 📁
  │   │   ├── listProducts 📁
  │   │   ├── listProductsByCategory 📁
  │   │   ├── user.routes.ts 📄
  │   │   ├── user.model.ts 📄
  │   │   └── user.ts 📄
  │   └── Categories 📁
  └── shared 📁

 ```
## Installation

Before running the project, make sure to install the necessary dependencies. Use the following command to install them:

```bash
npm install

```

## Running the Project

### Development

To run the project in development mode, use the following command:

```bash
npm run dev

```

### Production

To run the project in production mode, use the following command:

```bash
npm start

```
## Feel free to fork and add more features 

---

![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-lightgrey?style=for-the-badge&logo=express)
![MySQL](https://img.shields.io/badge/MySQL-blue?style=for-the-badge&logo=mysql)
![Prisma 2](https://img.shields.io/badge/Prisma%202-yellow?style=for-the-badge&logo=prisma)
![Joi](https://img.shields.io/badge/Joi-orange?style=for-the-badge&logo=joi)
![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-red?style=for-the-badge&logo=jsonwebtoken)
