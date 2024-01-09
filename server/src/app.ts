//import express and app type
import express, { Application } from "express";

//import http module
import http from "http";

//import server and express config.

import serverConfig from "./frameworks/server/httpServer";
import expressConfig from "./frameworks/server/expressConfig";

//import mongodb connection

import connectDB from "./frameworks/database/mongodb/connection";

//import routes

import routes from "./frameworks/server/routes";

//import error handling middleware

const app:Application = express();

//create server and passing with server config
const server = http.createServer(app)

const {startServer} = serverConfig(server)

// calling the all the configurations
 expressConfig(app)
 connectDB()
 routes(app)


 startServer()