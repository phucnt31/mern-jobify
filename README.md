## Introduction

- Welcome to Jobify application. This application provides users with a platform to track and manage their applied jobs. Users can perform CRUD (Create, Read, Update, Delete) operations on their applied jobs, utilize search and sort functionality, and gain insights into their job application statistics through visual charts. Additionally, users can update their profile information and toggle the application's theme.

#### Complete App

- Jobify: https://mern-jobify-lu8c.onrender.com

#### Create React APP

[VITE](https://vitejs.dev/guide/)

```sh
npm create vite@latest projectName -- --template react
```

#### Vite

```sh
npm i
```

```sh
npm run dev
```

- APP running on http://localhost:5173/
- .jsx extension

#### Setup .env file

- Create cloudinary account and get the corresponding values
- create MongoDB and get the connect URL

```sh
NODE_ENV=development
PORT=5100
MONGO_URL=
JWT_SECRET=
JWT_EXPIRES_IN=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```

#### Install Packages (Frontend)

- won't need to stop/start server

```sh
npm install @tanstack/react-query@4.29.5 @tanstack/react-query-devtools@4.29.6 axios@1.3.6 dayjs@1.11.7 react-icons@4.8.0 react-router-dom@6.10.0 react-toastify@9.1.2 recharts@2.5.0 styled-components@5.3.10

```

#### Install Packages and Setup Install Script (Backend)

```sh
npm install bcryptjs@2.4.3 concurrently@8.0.1 cookie-parser@1.4.6 dayjs@1.11.7 dotenv@16.0.3 express@4.18.2 express-async-errors@3.1.1 express-validator@7.0.1 http-status-codes@2.2.0 jsonwebtoken@9.0.0 mongoose@7.0.5 morgan@1.10.0 multer@1.4.5-lts.1 nanoid@4.0.2 nodemon@2.0.22 cloudinary@1.37.3 dayjs@1.11.9 datauri@4.1.0 helmet@7.0.0 express-rate-limit@6.8.0 express-mongo-sanitize@2.2.0

```

package.json

```json
"scripts": {
    "setup-project": "npm i && cd client && npm i"
  },
```

- install packages in root and client

```sh
npm run setup-project
```

#### Global Styles

- saves times on the setup
- less lines of css
- speeds up the development
- Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)

#### Title and Favicon

- add favicon.ico in public
- change title and favicon in index.html

```html
<head>
  <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
  <title>Jobify</title>
</head>
```

- resource [Generate Favicons](https://favicon.io/)

#### Router

[React Router](https://reactrouter.com/en/main)

- version 6.4 brought significant changes (loader and action)
- pages as independent entities
- less need for global state
- more pages

#### Setup Router

```sh
npm i react-router-dom@6.10.0
```

#### Styled Components

- CSS in JS
- Styled Components
- have logic and styles in component
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
npm install styled-components@5.3.10
```

- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs

#### Logo and Images

- [Cool Images](https://undraw.co/)

#### React Icons

[React Icons](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons@4.8.0
```

#### Setup Server

- create package.json

```sh
npm init -y
```

- create and test server.js

```sh
node server
```

#### ES6 Modules

package.json

```json
  "type": "module",
```

#### Setup Basic Express

- install express and nodemon.
- setup a basic server which listening on PORT=5100
- setup a script with nodemon package.

[Express Docs](https://expressjs.com/)

Express is a fast and minimalist web application framework for Node.js. It simplifies the process of building web applications by providing a robust set of features for handling HTTP requests, routing, middleware, and more. Express allows you to create server-side applications and APIs easily, with a focus on simplicity and flexibility.

[Nodemon Docs](https://nodemon.io/)

Nodemon is a development tool that improves the developer experience. It monitors your Node.js application for any changes in the code and automatically restarts the server whenever a change is detected. This eliminates the need to manually restart the server after every code modification, making the development process more efficient and productive. Nodemon is commonly used during development to save time and avoid the hassle of manual server restarts.

```sh
npm i express@4.18.2 nodemon@2.0.22
```

server.js

```js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5100, () => {
  console.log("server running....");
});
```

package.json

```json
"scripts": {
    "dev": "nodemon server.js"
  },
```

#### Thunder Client

Thunder Client is a popular Visual Studio Code extension that facilitates API testing and debugging. It provides a user-friendly interface for making HTTP requests and viewing the responses, allowing developers to easily test APIs, examine headers, and inspect JSON/XML payloads. Thunder Client offers features such as environment variables, request history, and the ability to save and organize requests for efficient development workflows.

[Thunder Client](https://www.thunderclient.com/)

#### Accept JSON

Setup express middleware to accept json

#### Morgan and Dotenv

[Morgan](https://www.npmjs.com/package/morgan)

HTTP request logger middleware for node.js

[Dotenv](https://www.npmjs.com/package/dotenv)

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

```sh
npm i morgan@1.10.0 dotenv@16.0.3
```

```js
import morgan from "morgan";

app.use(morgan("dev"));
```

- create .env file in the root
- add PORT and NODE_ENV
- add .env to .gitignore

server.js

```js
import * as dotenv from "dotenv";
dotenv.config();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`server running on PORT ${port}....`);
});
```

#### Nanoid

[Nanoid](https://www.npmjs.com/package/nanoid)

The nanoid package is a software library used for generating unique and compact identifiers in web applications or databases. It creates short and URL-safe IDs by combining random characters from a set of 64 characters. Nanoid is a popular choice due to its simplicity, efficiency, and collision-resistant nature.

```sh
npm i nanoid@4.0.2
```

#### MongoDB

[MongoDb](https://www.mongodb.com/)

MongoDB is a popular NoSQL database that provides a flexible and scalable approach to storing and retrieving data. It uses a document-oriented model, where data is organized into collections of JSON-like documents. MongoDB offers high performance, horizontal scalability, and easy integration with modern development frameworks, making it suitable for handling diverse data types and handling large-scale applications.

MongoDB Atlas is a fully managed cloud database service provided by MongoDB, offering automated deployment, scaling, and monitoring of MongoDB clusters, allowing developers to focus on building their applications without worrying about infrastructure management.

#### Mongoosejs

[Mongoose](https://mongoosejs.com/)

Mongoose is an Object Data Modeling (ODM) library for Node.js that provides a straightforward and elegant way to interact with MongoDB. It allows developers to define schemas and models for their data, providing structure and validation. Mongoose also offers features like data querying, middleware, and support for data relationships, making it a powerful tool for building MongoDB-based applications.

```sh
npm i mongoose@7.0.5
```

server.js

```js
import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
```

#### express-async-errors

The "express-async-errors" package is an Express.js middleware that helps handle errors that occur within asynchronous functions. It catches unhandled errors inside async/await functions and forwards them to Express.js's error handling middleware, preventing the Node.js process from crashing. It simplifies error handling in Express.js applications by allowing you to write asynchronous code without worrying about manually catching and forwarding errors.

[Express Async Errors](https://www.npmjs.com/package/express-async-errors)

```sh
npm i express-async-errors@3.1.1
```

- setup import at the top !!!

  server.js

```js
import "express-async-errors";
```

#### Status Codes

A library for HTTP status codes is useful because it provides a comprehensive and standardized set of codes that represent the outcome of HTTP requests. It allows developers to easily understand and handle different scenarios during web development, such as successful responses, client or server errors, redirects, and more. By using a status code library, developers can ensure consistent and reliable communication between servers and clients, leading to better error handling and improved user experience.

[Http Status Codes](https://www.npmjs.com/package/http-status-codes)

```sh
npm i http-status-codes@2.2.0

```

200 OK OK
201 CREATED Created

400 BAD_REQUEST Bad Request
401 UNAUTHORIZED Unauthorized

403 FORBIDDEN Forbidden
404 NOT_FOUND Not Found

500 INTERNAL_SERVER_ERROR Internal Server Error

#### Bad Request Error

400 BAD_REQUEST Bad Request
401 UNAUTHORIZED Unauthorized
403 FORBIDDEN Forbidden
404 NOT_FOUND Not Found

customErrors.js

```js
export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthenticatedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
```

#### Validation Layer

[Express Validator](https://express-validator.github.io/docs/)

```sh
npm i express-validator@7.0.1
```

#### Test Route

server.js

```js
app.post("/api/v1/test", (req, res) => {
  const { name } = req.body;
  res.json({ msg: `hello ${name}` });
});
```

#### Express Validator

```js
import { body, validationResult } from "express-validator";

app.post(
  "/api/v1/test",
  [body("name").notEmpty().withMessage("name is required")],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }
    next();
  },
  (req, res) => {
    const { name } = req.body;
    res.json({ msg: `hello ${name}` });
  }
);
```

#### Validation Middleware

middleware/validationMiddleware.js

```js
import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors";
const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateTest = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("name must be between 3 and 50 characters long")
    .trim(),
]);
```

#### Hash Passwords

[bcryptjs](https://www.npmjs.com/package/bcryptjs)

```sh
npm i bcryptjs@2.4.3

```

authController.js

```js
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  // a random value that is added to the password before hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
};
```

const salt = await bcrypt.genSalt(10);
This line generates a random "salt" value that will be used to hash the password. A salt is a random value that is added to the password before hashing, which helps to make the resulting hash more resistant to attacks like dictionary attacks and rainbow table attacks. The genSalt() function in bcrypt generates a random salt value using a specified "cost" value. The cost value determines how much CPU time is needed to calculate the hash, and higher cost values result in stronger hashes that are more resistant to attacks.

In this example, a cost value of 10 is used to generate the salt. This is a good default value that provides a good balance between security and performance. However, you may need to adjust the cost value based on the specific needs of your application.

const hashedPassword = await bcrypt.hash(password, salt);
This line uses the generated salt value to hash the password. The hash() function in bcrypt takes two arguments: the password to be hashed, and the salt value to use for the hash. It then calculates the hash value using a one-way hash function and the specified salt value.

The resulting hash value is a string that represents the hashed password. This string can then be stored in a database or other storage mechanism to be compared against the user's password when they log in.

By using a salt value and a one-way hash function, bcrypt helps to ensure that user passwords are stored securely and are resistant to attacks like password cracking and brute-force attacks.

#### JSON Web Token

A JSON Web Token (JWT) is a compact and secure way of transmitting data between parties. It is often used to authenticate and authorize users in web applications and APIs. JWTs contain information about the user and additional metadata, and can be used to securely transmit this information

[Useful Resource](https://jwt.io/introduction)

```sh
npm i jsonwebtoken@9.0.0
```

utils/tokenUtils.js

```js
import jwt from "jsonwebtoken";

export const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};
```

JWT_SECRET represents the secret key used to sign the JWT. When creating a JWT, the payload (data) is signed with this secret key to generate a unique token. The secret key should be kept secure and should not be disclosed to unauthorized parties.

JWT_EXPIRES_IN specifies the expiration time for the JWT. It determines how long the token remains valid before it expires. The value of JWT_EXPIRES_IN is typically provided as a duration, such as "1h" for one hour or "7d" for seven days. Once the token expires, it is no longer considered valid and can't be used for authentication or authorization purposes.

These environment variables (JWT_SECRET and JWT_EXPIRES_IN) are read from the system environment during runtime, allowing for flexibility in configuration without modifying the code.

authController.js

```js
import { createJWT } from "../utils/tokenUtils.js";

const token = createJWT({ userId: user._id, role: user.role });
console.log(token);
```

#### ENV Variables

.env

```js
JWT_SECRET=
JWT_EXPIRES_IN=
```

#### HTTP Only Cookie

An HTTP-only cookie is a cookie that can't be accessed by JavaScript running in the browser. It is designed to help prevent cross-site scripting (XSS) attacks, which can be used to steal cookies and other sensitive information.

##### HTTP Only Cookie VS Local Storage

An HTTP-only cookie is a type of cookie that is designed to be inaccessible to JavaScript running in the browser. It is primarily used for authentication purposes and is a more secure way of storing sensitive information like user tokens. Local storage, on the other hand, is a browser-based storage mechanism that is accessible to JavaScript, and is used to store application data like preferences or user-generated content. While local storage is convenient, it is not a secure way of storing sensitive information as it can be accessed and modified by JavaScript running in the browser.

authControllers.js

```js
const oneDay = 1000 * 60 * 60 * 24;

res.cookie("token", token, {
  httpOnly: true,
  expires: new Date(Date.now() + oneDay),
  secure: process.env.NODE_ENV === "production",
});

res.status(StatusCodes.CREATED).json({ msg: "user logged in" });
```

```js
const oneDay = 1000 * 60 * 60 * 24;
```

This line defines a constant oneDay that represents the number of milliseconds in a day. This value is used later to set the expiration time for the cookie.

```js
res.cookie('token', token, {...});:
```

This line sets a cookie with the name "token" and a value of token, which is the JWT that was generated for the user. The ... represents an object containing additional options for the cookie.

httpOnly: true: This option makes the cookie inaccessible to JavaScript running in the browser. This helps to prevent cross-site scripting (XSS) attacks, which can be used to steal cookies and other sensitive information.

expires: new Date(Date.now() + oneDay): This option sets the expiration time for the cookie. In this case, the cookie will expire one day from the current time (as represented by Date.now() + oneDay).

secure: process.env.NODE_ENV === 'production': This option determines whether the cookie should be marked as secure or not. If the NODE_ENV environment variable is set to "production", then the cookie is marked as secure, which means it can only be transmitted over HTTPS. This helps to prevent man-in-the-middle (MITM) attacks, which can intercept and modify cookies that are transmitted over unsecured connections.

#### Connect User and Job

models/User.js

```js
const JobSchema = new mongoose.Schema(
  {
    ....
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
```

##### Cookie Parser

[Cookie Parser](https://www.npmjs.com/package/cookie-parser)

```sh
npm i cookie-parser@1.4.6
```

server.js

```js
import cookieParser from "cookie-parser";
app.use(cookieParser());
```

```js
import { authorizePermissions } from "../middleware/authMiddleware.js";

router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
```

#### Setup Proxy

- only in dev env
- a must since cookies are sent back to the same server

- server

```sh
npm run dev
```

- vite dev server

```sh
cd client && npm run dev
```

server.js

```js
app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});
```

client/src/main.jsx

```js
fetch("http://localhost:5100/api/v1/test")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

client/vite.config.js

```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5100/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
```

This code configures a proxy rule for the development server, specifically for requests that start with /api. Let's go through each property:

'/api': This is the path to match. If a request is made to the development server with a path that starts with /api, the proxy rule will be applied.
target: 'http://localhost:5100/api': This specifies the target URL where the requests will be redirected. In this case, any request that matches the /api path will be forwarded to http://localhost:5100/api.

changeOrigin: true: When set to true, this property changes the origin of the request to match the target URL. This can be useful when working with CORS (Cross-Origin Resource Sharing) restrictions.

rewrite: (path) => path.replace(/^\/api/, ''): This property allows you to modify the path of the request before it is forwarded to the target. In this case, the rewrite function uses a regular expression (/^\/api/) to remove the /api prefix from the path. For example, if a request is made to /api/users, the rewritten path will be /users.

To summarize, these lines of code configure a proxy rule for requests starting with /api on the development server. The requests will be redirected to http://localhost:5100/api, with the /api prefix removed from the path.

#### Concurrently

The concurrently npm package is a utility that allows you to run multiple commands concurrently in the same terminal window. It provides a convenient way to execute multiple tasks or processes simultaneously.

```sh
npm i concurrently@8.0.1
```

```json
"scripts": {
    "setup-project": "npm i && cd client && npm i",
    "server": "nodemon server",
    "client": "cd client && npm run dev",
    "dev": "concurrently --kill-others-on-fail \" npm run server\" \" npm run client\""
  },
```

By default, when a command fails, concurrently continues running the remaining commands. However, when --kill-others-on-fail is specified, if any of the commands fail, concurrently will immediately terminate all the other running commands.

#### Axios

Axios is a popular JavaScript library that simplifies the process of making HTTP requests from web browsers or Node.js. It provides a simple and elegant API for performing asynchronous HTTP requests, supporting features such as making GET, POST, PUT, and DELETE requests, handling request and response headers, handling request cancellation, and more.

[Axios Docs](https://axios-http.com/docs/intro)

```sh
npm i axios@1.3.6
```

main.jsx

```js
import axios from "axios";

const data = await axios.get("/api/v1/test");
console.log(data);
```

#### Custom Instance

utils/customFetch.js

```js
import axios from "axios";
const customFetch = axios.create({
  baseURL: "/api/v1",
});

export default customFetch;
```

#### React Router - Action

Route actions are the "writes" to route loader "reads". They provide a way for apps to perform data mutations with simple HTML and HTTP semantics while React Router abstracts away the complexity of asynchronous UI and revalidation. This gives you the simple mental model of HTML + HTTP (where the browser handles the asynchronous and revalidation) with the behavior and UX capabilities of modern SPAs.

Register.jsx

```js
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        ...
      </Form>
    </Wrapper>
  );
};
export default Register;
```

App.jsx

```jsx
{
  path: 'register',
  element: <Register />,
  action: () => {
   console.log('hello there');
   return null;
    },
},
```

#### useNavigation() and navigation.state

This hook tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations. Things like:

- Global loading indicators
- Adding busy indicators to submit buttons

Navigation State

idle - There is no navigation pending.
submitting - A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE
loading - The loaders for the next routes are being called to render the next page

#### React-Toastify

Import and set up the react-toastify library.

[React Toastify](https://fkhadra.github.io/react-toastify/introduction)

```sh
npm i react-toastify@9.1.2
```

main.jsx

```js
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-center" />
  </React.StrictMode>
);
```

#### Dayjs

```sh
npm i dayjs@1.11.7
```

[Dayjs Docs](https://day.js.org/docs/en/installation/installation)

#### Avatar Image

[pexels](https://www.pexels.com/search/person/)

#### Update User - Server

```sh
npm i multer@1.4.5
```

Multer is a popular middleware package for handling multipart/form-data in Node.js web applications. It is commonly used for handling file uploads. Multer simplifies the process of accepting and storing files submitted through HTTP requests by providing an easy-to-use API. It integrates seamlessly with Express.js and allows developers to define upload destinations, file size limits, and other configurations.

#### Cloudinary - Create Account/Get API Keys

[Cloudinary](https://cloudinary.com/)

Cloudinary is a cloud-based media management platform that helps businesses store, optimize, and deliver images and videos across the web. It provides developers with an easy way to upload, manipulate, and serve media assets, enabling faster and more efficient delivery of visual content on websites and applications. Cloudinary also offers features like automatic resizing, format conversion, and responsive delivery to ensure optimal user experiences across different devices and network conditions.

.env

```sh
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```

#### Cloudinary - Setup Instance

```sh
npm i cloudinary@1.37.3
```

server

```js
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
```

#### Mock Data

[Mockaroo ](https://www.mockaroo.com/)

```json
{
  "company": "Cogidoo",
  "position": "Help Desk Technician",
  "jobLocation": "Vyksa",
  "jobStatus": "pending",
  "jobType": "part-time",
  "createdAt": "2022-07-25T21:26:23Z"
}
```

#### Stats - Complete Server Functionality

[MongoDB Docs](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/)

The MongoDB aggregation pipeline is like a factory line for data. Data enters, it goes through different stages like cleaning, sorting, or grouping, and comes out at the end changed in some way. It's a way to process data inside MongoDB.

jobController.js

```js
export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format("MMM YY");
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
```

#### Commentary

```js
let stats = await Job.aggregate([
  { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
  { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
]);
```

let stats = await Job.aggregate([ ... ]); This line says we're going to perform an aggregation operation on the Job collection in MongoDB and save the result in a variable called stats. The await keyword is used to wait for the operation to finish before continuing, as the operation is asynchronous (i.e., it runs in the background).

{ $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } } This is the first stage of the pipeline. It filters the jobs so that only the ones created by the user specified by req.user.userId are passed to the next stage. The new mongoose.Types.ObjectId(req.user.userId) part converts req.user.userId into an ObjectId (which is the format MongoDB uses for ids).

{ $group: { _id: '$jobStatus', count: { $sum: 1 } } } This is the second stage of the pipeline. It groups the remaining jobs by their status (the jobStatus field). For each group, it calculates the count of jobs by adding 1 for each job ({ $sum: 1 }), and stores this in a field called count.

```js
let monthlyApplications = await Job.aggregate([
  { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
  {
    $group: {
      _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
      count: { $sum: 1 },
    },
  },
  { $sort: { "_id.year": -1, "_id.month": -1 } },
  { $limit: 6 },
]);
```

let monthlyApplications = await Job.aggregate([ ... ]); This line indicates that an aggregation operation will be performed on the Job collection in MongoDB. The result will be stored in the variable monthlyApplications. The await keyword ensures that the code waits for this operation to complete before proceeding, as it is an asynchronous operation.

{ $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } } This is the first stage of the pipeline. It filters the jobs to only those created by the user identified by req.user.userId.

{ $group: { _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } }, count: { $sum: 1 } } } This is the second stage of the pipeline. It groups the remaining jobs based on the year and month when they were created. For each group, it calculates the count of jobs by adding 1 for each job in the group.

{ $sort: { '\_id.year': -1, '\_id.month': -1 } } This is the third stage of the pipeline. It sorts the groups by year and month in descending order. The -1 indicates descending order. So it starts with the most recent year and month.

{ $limit: 6 } This is the fourth and last stage of the pipeline. It limits the output to the top 6 groups, after sorting. This is effectively getting the job count for the last 6 months.

So, monthlyApplications will be an array with up to 6 elements, each representing the number of jobs created by the user in a specific month and year. The array will be sorted by year and month, starting with the most recent.

#### Charts

[recharts](https://recharts.org/en-US/)

- in the client

```sh
npm i recharts@2.5.0
```

#### Get All Jobs - Server

jobController.js

Query parameters, also known as query strings or URL parameters, are used to pass information to a web server through the URL of a webpage. They are typically appended to the end of a URL after a question mark (?) and separated by ampersands (&). Query parameters consist of a key-value pair, where the key represents the parameter name and the value represents the corresponding data being passed. They are commonly used in web applications to provide additional context or parameters for server-side processing or to filter and sort data.

```js
export const getAllJobs = async (req, res) => {
  const { search, jobStatus, jobType, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { position: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }
  if (jobStatus && jobStatus !== "all") {
    queryObject.jobStatus = jobStatus;
  }
  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const jobs = await Job.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res
    .status(StatusCodes.OK)
    .json({ totalJobs, numOfPages, currentPage: page, jobs });
};
```

#### All Jobs Loader

AllJobs.jsx

```js
import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
const AllJobsContext = createContext();
export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get("/jobs", {
      params,
    });

    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
export default AllJobs;

export const useAllJobsContext = () => useContext(AllJobsContext);
```

```js
const params = Object.fromEntries([
  ...new URL(request.url).searchParams.entries(),
]);
```

new URL(request.url): This creates a new URL object by passing the request.url to the URL constructor. The URL object provides various methods and properties to work with URLs.

.searchParams: The searchParams property of the URL object gives you access to the query parameters in the URL. It is an instance of the URLSearchParams class, which provides methods to manipulate and access the parameters.

.entries(): The entries() method of searchParams returns an iterator containing arrays of key-value pairs for each query parameter. Each array contains two elements: the parameter name and its corresponding value.

([...new URL(request.url).searchParams.entries()]): The spread operator ... is used to convert the iterator obtained from searchParams.entries() into an array. This allows us to pass the array to the Object.fromEntries() method.

Object.fromEntries(): This static method creates an object from an array of key-value pairs. It takes an iterable (in this case, the array of parameter key-value pairs) and returns a new object where the keys and values are derived from the iterable.

Putting it all together, the code retrieves the URL from the request.url property, extracts the search parameters using the searchParams property, converts them into an array of key-value pairs using entries(), and finally uses Object.fromEntries() to create an object with the parameter names as keys and their corresponding values. The resulting object, params, contains all the search parameters from the URL.

#### Debounce

In JavaScript, debounce is a way to limit how often a function gets called. It helps prevent rapid or repeated function executions by introducing a delay. This is useful for tasks like handling user input, where you want to wait for a pause before triggering an action to avoid unnecessary processing.

```js
const debounce = (onChange) => {
  let timeout;
  return (e) => {
    const form = e.currentTarget.form;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      onChange(form);
    }, 2000);
  };
};
<FormRow
  type="search"
  name="search"
  defaultValue={search}
  onChange={debounce((form) => {
    submit(form);
  })}
/>;
```

#### Deploy On Render

[Render](https://render.com/)

- sign up of for account
- create git repository

#### Build Front-End on Render

- add script
- change path

package.json

```js
 "scripts": {
    "setup-production-app": "npm i && cd client && npm i && npm run build",
  },
```

server.js

```js
app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
```

#### Test Locally

- remove client/dist and client/node_modules
- remove node_modules and package-lock.json (optional)
- run "npm run setup-production-app", followed by "node server"

#### Test in Production

- change build command on render

```sh
npm run setup-production-app
```

- push up to github

#### Upload Image As Buffer

- remove public folder

```sh
npm i datauri@4.1.0
```

middleware/multerMiddleware.js

```js
import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const parser = new DataParser();

export const formatImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};

export default upload;
```

controller/userController.js

```js
import { formatImage } from "../middleware/multerMiddleware.js";

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: "update user" });
};
```

#### React Query

React Query is a powerful library that simplifies data fetching, caching, and synchronization in React applications. It provides a declarative and intuitive way to manage remote data by abstracting away the complex logic of fetching and caching data from APIs. React Query offers features like automatic background data refetching, optimistic updates, pagination support, and more, making it easier to build performant and responsive applications that rely on fetching and manipulating data.

[React Query Docs](https://tanstack.com/query/v4/docs/react/overview)

- in the client

```sh
npm i @tanstack/react-query@4.29.5 @tanstack/react-query-devtools@4.29.6
```

App.jsx

```js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
```

#### Security

```sh
npm install helmet express-mongo-sanitize express-rate-limit

```

Package: helmet
Description: helmet is a security package for Express.js applications that helps protect them by setting various HTTP headers to enhance security, prevent common web vulnerabilities, and improve overall application security posture.
Need: The package is needed to safeguard web applications from potential security threats, such as cross-site scripting (XSS) attacks, clickjacking, and other security exploits.

Package: express-mongo-sanitize
Description: express-mongo-sanitize is a middleware for Express.js that sanitizes user-supplied data coming from request parameters, body, and query strings to prevent potential NoSQL injection attacks on MongoDB databases.
Need: The package addresses the need to protect MongoDB databases from malicious attempts to manipulate data and helps ensure the integrity of data storage and retrieval.

Package: express-rate-limit
Description: express-rate-limit is an Express.js middleware that helps control and limit the rate of incoming requests from a specific IP address or a set of IP addresses to protect the server from abuse, brute-force attacks, and potential denial-of-service (DoS) attacks.
Need: This package is necessary to manage and regulate the number of requests made to the server within a given time frame, preventing excessive usage and improving the overall stability and performance of the application.
