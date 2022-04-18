import app from "./src/server.js";
import "dotenv/config";
import mongoose from "mongoose";
const port = process.env.PORT || 3001;
const db = process.env.DATABASE;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Live at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
