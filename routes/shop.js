import express from "express";
import {resolve, join} from "path";

// local imports
import { products } from "../app.js";

const router = express.Router();

const __dirname = resolve();

router.get('/', (req, res, next) => {
  res.render('shop', {prods: products, docTitle: "Home"});
});

export default router;
