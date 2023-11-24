import express from 'express';
import bodyParser from 'body-parser';
import {join, resolve} from 'path';

import admin from "./routes/admin.js";
import shop from "./routes/shop.js";

// Initialize the App
const app = express();

// Constants
const __dirname = resolve();
const PORT = 3000

// Initialize URL Encode
app.use(bodyParser.urlencoded({extended: false}));
// Serve static files
app.use(express.static(join(__dirname, 'public')));

app.use("/admin", admin); // admin filter
app.use(shop);

app.use((req,res,next) => {
    res.status(404).sendFile(join(__dirname, "views", "404.html"));
})

// Start Server
app.listen(PORT, () => {
    console.log("Listening at Port:3000");
});