import {  Express } from "express";
import viewRouter from "./views.routes";
import testRouter from "./test.routes";

const adminRoutes = (app:Express)=>{
    app.use(viewRouter);
    app.use('/test', testRouter);
}

export default adminRoutes;