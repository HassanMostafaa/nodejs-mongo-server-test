import app from "./src/server.js";

import mongoose from "mongoose";
const port = process.env.PORT || 3001;

mongoose
  .connect(
    "mongodb Connect String",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Database Connected");
    app.listen(port, () => {
      console.log(`server live at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
