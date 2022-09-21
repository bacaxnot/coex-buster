import {  Express } from "express";
import viewRouter from "./views.routes";
import testRouter from "./test.routes";
import userRouter from "./user.routes";
import moviesRouter from "./movies.routes";
import transactionRouter from './transaction.routes';

const adminRoutes = (app:Express)=>{
    app.use(viewRouter);
    app.use('/api/v1', userRouter);
    app.use('/api/v1', moviesRouter);
    app.use('/ap1/v1', transactionRouter);
    app.use('/test', testRouter);
}

export default adminRoutes;