import app from "./app";
// import { port, serverUrl } from "./src/utility/config";

// Define a type for the logger object
interface Logger {
  info: (message: string) => void;
  error: (message: string) => void;
}

// Set the port with a fallback value of 6502
const PORT: number =  6502;

// Create a simple logger object
const logger: Logger = {
  info: (message: string): void => {
    console.log(`[INFO] ${message}`);
  },
  error: (message: string): void => {
    console.error(`[ERROR] ${message}`);
  },
};


// Start the app and listen on the specified port
app.listen(PORT, (): void => {
  logger.info(`App listening on :${PORT}`);
});
