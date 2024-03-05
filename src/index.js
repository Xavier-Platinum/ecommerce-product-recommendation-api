import express from 'express';
import http from "http";
import { config } from 'dotenv';
import routes from './routes/routes.js';

const app = express();
config();

routes(app)

http
    .createServer(app)
    .listen(process.env.PORT, async() => {
        console.log(`Server is listening on port ${process.env.PORT}`)
    })
    .on('error', async(err) => {
        console.error(`Server error: ${err}`)
    })
