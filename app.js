import express from 'express';
import bodyParser from 'body-parser';
import {join, resolve} from 'path';

import admin from "./admin/admin.js";

// Initialize the App
const app = express();

// Initialize URL Encode
app.use(bodyParser.urlencoded({extended: false}));

const __dirname = resolve();

app.use("/admin", admin); // admin filter

app.get('/', (req, res, next) => {
    res.status(200).sendFile(join(__dirname, "views", "home.html"));
})

app.use((req,res,next) => {
    res.sendFile(join(__dirname, "views", "404.html"));
})

// Start Server
app.listen(3000, () => {
    console.log("Listening at Port:3000");
});