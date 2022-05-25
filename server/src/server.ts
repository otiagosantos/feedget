import express from "express";
import { routes } from "./routes";
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3333, () => console.log("Server On"));
