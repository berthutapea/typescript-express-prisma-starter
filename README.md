<H1 align ="center" >Express.js + Prisma + TypeScript Starter & boilerplate</h1>
<h5  align ="center"> 
🤖 Express.js + Prisma + TypeScript starter and boilerplate packed with useful development features.</h5>
<br/>

## Description

Starter template and boilerplate combining Express.js, Prisma, and TypeScript. This project setup offers a well-organized and type-safe environment for building scalable backend applications. With Express.js as the lightweight server framework, Prisma as the powerful ORM for seamless database interactions, and TypeScript ensuring type safety and reducing errors, this boilerplate provides a solid foundation for rapid development. Ideal for developers looking to quickly start projects with a structured codebase, best practices, and improved maintainability.

- [Configuration and Setup](#configuration-and-setup)
- [Technologies used](#technologies-used)
- [Project Structure](#project-structure)
- [Postman](#postman)
- [Author](#author)
- [License](#license)

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)

In the first terminal

```
$ cd typescript-express-prisma-starter
$ npm install
$ npm run start
```

In the second terminal

- Create your MySQL database, which you will use as your database
- Supply the following credentials

```
#  --- .env  ---

# Database Configuration
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/typescript_express_prisma_starter"

```

## Technologies used

This project was created using the following technologies.

- [Node](https://nodejs.org/en/) — A runtime environment to help build fast server applications using TypeScript
- [Express](https://www.npmjs.com/package/express) — The server for handling and routing HTTP requests
- [TypeScript](https://www.npmjs.com/package/typescript) — A strongly-typed programming language that builds on JavaScript by adding static types, helping developers catch errors early and enabling better tooling support, making code more robust and maintainable.
- [Prisma](https://www.prisma.io) — An Object-Relational Mapping (ORM) tool for Node.js that simplifies database access in TypeScript applications, supporting relational databases like MySQL, PostgreSQL, and SQLite.
- [Jest](https://www.npmjs.com/package/jest) — A popular testing framework for TypeScript, designed to provide a fast, reliable, and easy-to-use solution for unit testing, integration testing, and mocking, making it ideal for testing Node.js and React applications.
- [Supertest](https://www.npmjs.com/package/supertest) — A testing library for HTTP assertions in Node.js, commonly used to test API endpoints by simulating HTTP requests and verifying responses, making it ideal for integration testing in web applications.
- [Zod](https://www.npmjs.com/package/zod) — A TypeScript first schema validation library for data parsing and validation, allowing developers to define schemas that ensure data integrity, handle errors gracefully, and provide type safety in applications.
- [Bcrypt](https://www.npmjs.com/package/bcryptjs) — For data encryption
- [Winston](https://www.npmjs.com/package/winston) — A versatile logging library for Node.js, allowing developers to log information with different levels, formats, and transports, making it easy to track application events, errors, and system performance.
- [Babel](https://babeljs.io/setup#installation) — A JavaScript compiler that enables developers to use the latest JavaScript features by transforming modern JavaScript code into a backward-compatible version, ensuring compatibility across various environments and browsers.
- [Uuid](https://www.npmjs.com/package/uuid) — A library for generating unique identifiers (UUIDs) in JavaScript, commonly used to create unique IDs for database entries, session tokens, or other cases where distinct identification is required.

## Project Structure

```bash
├── docs
│    ├── address.md
│    ├── contact.md
│    ├── user.md
├── prisma
│    ├── migrations
│    ├── schema.prisma
├── src
│    ├── apps
│    │    ├── database.ts
│    │    ├── logging.ts
│    │    ├── web.ts
│    ├── controllers
│    │    ├── address-controller.ts
│    │    ├── contact-controller.ts
│    │    ├── user-controller.ts
│    ├── errors
│    │    ├── response-error.ts
│    ├── middlewares
│    │    ├── auth-middleware.ts
│    │    ├── error-middleware.ts
│    ├── models
│    │    ├── address-model.ts
│    │    ├── contact-model.ts
│    │    ├── page.ts
│    │    ├── user-model.ts
│    ├── routes
│    │    ├── api.ts
│    │    ├── public-api.ts
│    ├── services
│    │    ├── address-service.ts
│    │    ├── contact-service.ts
│    │    ├── user-service.ts
│    ├── types
│    │    ├── user-request.ts
│    ├── validations
│    │    ├── address-validation.ts
│    │    ├── contact-validation.ts
│    │    ├── user-validation.ts
│    │    ├── validation.ts
│    ├── main.ts
├── tests
│    ├── address.test.ts
│    ├── contact.test.ts
│    ├── test-util.ts
│    ├── user.test.ts
├── .env.example
├── .gitignore
├── LICENSE
├── README.md
├── babel.config.json
├── package.json
├── tsconfig.json
```

## Postman

- [View API Documentation](https://documenter.getpostman.com/view/26058900/2sAY4yegUt) : https://documenter.getpostman.com/view/26058900/2sAY4yegUt

## Author

- [Gilbert Hutapea](https://www.linkedin.com/in/gilberthutapea/)

## License

MIT License

Copyright (c) 2024 Gilbert Hutapea

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
