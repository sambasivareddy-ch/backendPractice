import express from 'express';
import {join, resolve} from 'path';

import admin from "./routes/admin.js";
import shop from "./routes/shop.js";

// Initialize the App
const app = express();

// Constants
const __dirname = resolve();
const PORT = 3000

// Temporary Database
const products = [];

// Initialize URL Encode
// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended: false}));

// Setting template engine
app.set('view engine', 'pug');
app.set('views', 'views');

// Serve static files
app.use(express.static(join(__dirname, 'public')));

app.use("/admin", admin); // admin filter
app.use(shop);

app.use((req,res,next) => {
    res.render('404', {
        docTitle: "404"
    })
})

// Start Server
app.listen(PORT, () => {
    console.log("Listening at Port:3000");
});

export {products};