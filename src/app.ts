import express from "express";
import 'dotenv/config';
import webRouters from "routes/web";

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

//config req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//config router
webRouters(app);

//config static file: images, css, js
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`My app is running on port: ${process.env.PORT}`)
})