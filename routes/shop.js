import express from "express";
import {resolve, join} from "path";

const router = express.Router();

const __dirname = resolve();

router.get('/', (req, res, next) => {
  res.status(200).sendFile(join(__dirname, ".", "views", "home.html"))
});

export default router;
