import express from "express";
import {join, resolve} from "path";

const router = express.Router();

const __dirname = resolve();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.status(200).sendFile(join(__dirname, ".", "views", "add-product.html"));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
