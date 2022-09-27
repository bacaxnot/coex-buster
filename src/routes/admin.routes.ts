import {  Express } from "express";
import cookieParser from "cookie-parser";
import viewRouter from "./views.routes";
import testRouter from "./test.routes";
import userRouter from "./user.routes";
import moviesRouter from "./movies.routes";
import loginRouter from "./login.routes";
import transactionRouter from './transaction.routes';
import shoppingRouter from './shopping.routes';
const adminRoutes = (app:Express)=>{
    app.use(viewRouter);
    app.use(cookieParser());
    app.use('/api/v1', loginRouter)
    app.use('/api/v1', userRouter);
    app.use('/api/v1', moviesRouter);
    app.use('/api/v1', transactionRouter);
    app.use('/api/v1', shoppingRouter)
    app.use('/test', testRouter);
}

export default adminRoutes;