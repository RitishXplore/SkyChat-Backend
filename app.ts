import express, { Express } from "express";
import path from "path";
import http, { Server } from "http";
import cors from "cors";
import { Socket } from "socket.io";

// Import custom loader modules
// import loadAppRoutes from "./src/loaders/loadAppRoutes";
// import loadAppMiddlewares from "./src/loaders/loadAppMiddleware";
// import loadDatabase from "./src/loaders/loadDatabase";
// import loadSocketServer from "./src/loaders/load_socket_server";

// Import logger
import logger from "./logger";

// Initialize express app
const app: Express = express();

// Create HTTP server
const server: Server = http.createServer(app);

// Setup CORS
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static('images'));

// Handle unhandled promise rejections globally
process.on("unhandledRejection", (error: Error) => {
    console.error("Uncaught Error", { error: error.message });
    logger.error("Unhandled rejection", error);
});

// Initialize socket server with CORS options
const socketio: Socket = require("socket.io")(server, {
    cors: {
        origin: true,
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

// Initialize and load app components
(function () {
    // Initialize socket connection
    // loadSocketServer.connectSocketServer({ socketio, server });

    // // Initialize request parser middlewares
    // loadAppMiddlewares.initRequestParserMiddlewares({ app, express });

    // // Initialize app routes
    // loadAppRoutes.initRoutes({ app });

    // // Initialize additional app middlewares
    // loadAppMiddlewares.initMiddlewares({ app, express });

    // // Initialize database connection
    // loadDatabase.initDatabase();
})();

// Export the HTTP server
export default server;
