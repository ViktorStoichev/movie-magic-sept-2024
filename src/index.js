import express from 'express';
import routes from './routes.js';
import 'dotenv/config';
import expressInit from './config/expressInit.js';
import { handlebarsInit } from './config/handlebarsInit.js';
import mongooseInit from './config/mongooseInit.js';

const app = express();
const port = 5000;

mongooseInit();
handlebarsInit(app);
expressInit(app);

app.use(routes);


app.listen(port, () => console.log(`Server is listening on http://localhost:${port}...`));
