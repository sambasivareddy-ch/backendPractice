import express from "express";
import {join, resolve} from "path";

const router = express.Router();

const __dirname = resolve();

router.get('/add-product', (req, res, next) => {
    res.sendFile(join(__dirname, ".", "views", "add-product.html"));
})

export default router;