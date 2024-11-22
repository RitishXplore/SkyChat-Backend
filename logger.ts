import winston, { transports, createLogger, format, Logger } from 'winston';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load environment variables
dotenv.config();

// Define log directory path
const logDirectory = path.join(__dirname, 'logs');

// Ensure log directory exists
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
}

// Create a base logger with transports
const baseLogger: Logger = createLogger({
    level: process.env.LOG_LEVEL || 'info',  // Default to 'info' level
    format: format.combine(
        format.timestamp(),
        format.json()  // Structured JSON logs
    ),
    transports: [
        // Error logs (for production or critical errors)
        new transports.File({
            filename: path.join(logDirectory, 'error.log'),
            level: 'error',  // Only error logs will go into this file
            maxsize: 5 * 1024 * 1024, // 5MB log size limit
            maxFiles: 5, // Keep up to 5 log files
        }),
        // Combined logs (for general logging)
        new transports.File({
            filename: path.join(logDirectory, 'combined.log'),
            maxsize: 5 * 1024 * 1024, // 5MB log size limit
            maxFiles: 5, // Keep up to 5 log files
        }),
    ],
});

// Add console transport for non-production environments
if (process.env.NODE_ENV !== 'production') {
    baseLogger.add(
        new transports.Console({
            format: format.combine(
                format.colorize(),  // Colorize log output in console
                format.simple()     // Simple text format for the console
            ),
        })
    );
}

// Handle uncaught exceptions and unhandled promise rejections
baseLogger.exceptions.handle(
    new transports.File({
        filename: path.join(logDirectory, 'exceptions.log'),
        level: 'error',
    }),
    new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple()
        ),
    })
);

process.on('unhandledRejection', (reason, promise) => {
    baseLogger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
});

// Define a custom logger object with the `stream` property for integration with morgan or other middleware
const logger = {
    ...baseLogger,
    stream: {
        write: (message: string): void => {
            baseLogger.info(message.trim());  // Log incoming request logs
        },
    },
};

// Export the logger
export default logger;
