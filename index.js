require("dotenv").config()

import express from "express";
import bodyParser from "body-parser";
import path from "path"

const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000

app.use(bodyParser.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname + "/assets")))

app.use('/products', require('./routes/products'));
app.use('/cart', require('./routes/cart'));
app.use('/auth', require('./routes/auth'));

app.get("/", async (req, res) => { res.status(200).json({data: "This api is for my e-commerce"})})
app.listen(port, () => console.log("server listening 8000..!!"))


// npm run dev
