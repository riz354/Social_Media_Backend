import "dotenv/config";
import  Express  from "express";
import { connect } from "./DB/config.js";
import dbInit from "./DB/init.js";
import AllRouters from "./Routes/index.js";


const app = Express();


connect();
dbInit().then(() => console.log("db synced"));
app.use(Express.json())
app.use(AllRouters);

app.listen(8000,()=>console.log("server started"));
