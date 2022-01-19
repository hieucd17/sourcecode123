import express from "express";
import bodyParser from "body-parser"; //Lấy tham số trên url
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config(); //để chạy được env

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//config web
viewEngine(app);
initWebRoutes(app);
//Quan trọng thứ tự gọi hàm trong nodejs

connectDB();

let port = process.env.PORT || 2003;

app.listen(port, () => {
  console.log("backend nodejs is runing on the port:" + port);
});
