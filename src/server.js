import express from "express";

import { getAllNames } from "./controllers/nameControllers.js";
import {
  addNewUser,
  getAllUsers,
  deleteUser,
  findUser,
} from "./controllers/usersControllers.js";

const app = express();
app.use(express.json());
app.get("/names", getAllNames);
app.get("/", (req, res) => {
  res.send("Landing Page");
});
app.get("/users", getAllUsers);
app.post("/users", addNewUser);
app.delete("/users/:id", deleteUser);
app.get("/users/:id", findUser);

export default app;
