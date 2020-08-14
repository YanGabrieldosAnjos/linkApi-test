import "reflect-metadata";
import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";
const{PORT, NODE_ENV} =  process.env;
export const app = express();

    
app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);


app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}! Go to http://localhost:${PORT}/`)
})
export default  app;