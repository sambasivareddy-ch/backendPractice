import express from "express";
import {join, resolve} from "path";

// local imports
import { products } from "../app.js";

const router = express.Router();

const __dirname = resolve();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.status(200).sendFile(join(__dirname, ".", "views", "add-product.html"));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({
    title: req.body['title'],
  });
  res.redirect('/');
});

export default router;
