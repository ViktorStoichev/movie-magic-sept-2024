import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

import { authMiddleware } from "../middlewares/auth-middleware.js";
import { tempData } from "../middlewares/temp-data-middleware.js";

export default function expressInit(app) {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static("static"));
  app.use(cookieParser());
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
  app.use(authMiddleware);
  app.use(tempData)
}
