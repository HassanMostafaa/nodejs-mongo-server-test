import app from "./src/server.js";

import mongoose from "mongoose";
const port = process.env.PORT || 3001;

mongoose
  .connect(
    "mongodb://hassan:hassan123456@nodedbtest-shard-00-00.kvyza.mongodb.net:27017,nodedbtest-shard-00-01.kvyza.mongodb.net:27017,nodedbtest-shard-00-02.kvyza.mongodb.net:27017/nodeDbTest?ssl=true&replicaSet=atlas-vn74n3-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Database Connected");
    app.listen(port, () => {
      console.log(`server live at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
