import express from "express";

import { apiV1 } from "./v1";

const rootRouter = express.Router();

rootRouter.use("/api/v1", apiV1);

rootRouter.get("/help", (req, res) => {
  res.send("abc123");
});
export default rootRouter;
