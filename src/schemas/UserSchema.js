import mongoose from "mongoose";

const Schema = mongoose.Schema;
const User = mongoose.model(
  "user",
  Schema({
    email: String,
    password: String,
  })
);

export default User;
