import {  Express } from "express";
import viewRouter from "./views.routes";
import testRouter from "./test.routes";

const adminRoutes = (app:Express)=>{
    app.use(viewRouter);
    app.use('/login', testRouter);
    app.use('/register', testRouter);
}

export default adminRoutes;