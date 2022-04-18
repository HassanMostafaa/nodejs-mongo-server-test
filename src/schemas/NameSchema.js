import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Name = mongoose.model(
  "name",
  Schema({
    name: String,
  })
);
export default Name;
