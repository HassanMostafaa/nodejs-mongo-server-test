import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getAllNames } from "./controllers/nameControllers.js";
import {
  addNewUser,
  getAllUsers,
  deleteUser,
  findUser,
} from "./controllers/usersControllers.js";

// 👇️ "/home/john/Desktop/javascript"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.get("/api/names", getAllNames);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});
app.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/users.html"));
});
app.get("/api/users", getAllUsers);
app.post("/api/users", addNewUser);
app.delete("/api/users/:id", deleteUser);
app.get("/api/users/:id", findUser);

export default app;
