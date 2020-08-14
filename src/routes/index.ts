import { Router, Request, Response } from "express";
import pipedrive from "./pipedrive";



const routes = Router();


routes.use("/pipedrive", pipedrive);

export default routes;