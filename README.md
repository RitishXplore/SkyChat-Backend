# SkyChat

SkyChat is a messaging platform that allows users to chat, make simple voice calls, and host video conferences. Initially built as a monolithic application, the app will evolve into a microservices architecture over time. The project uses Node.js, Express.js, PostgreSQL, and MongoDB (for future scalability).

## Features
- **Chat**: Real-time text-based communication between users.
- **Voice Calls**: Simple peer-to-peer voice calling.
- **Video Conferencing**: Group video calls for multiple users.
- **User Authentication**: Secure login and registration system.
- **Database**: Initially uses PostgreSQL for data storage.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (Sequelize ORM), MongoDB (planned for future scalability)
- **Real-Time Communication**: WebSockets for chat and calls.
- **Messaging Queue**: Kafka (for future microservices communication)
- **Authentication**: JWT (JSON Web Tokens) for secure user authentication.

## Architecture

### Current Version (Monolithic)
- The application is currently a monolithic architecture with a single PostgreSQL database handling both data and communication.
  
### Future Version (Microservices)
- SkyChat will soon be refactored to use microservices. Kafka will be used as a message broker between different services to scale the application for better performance and maintainability.

## Installation

### Prerequisites
- **Node.js**: Version 14 or above.
- **PostgreSQL**: Set up a PostgreSQL database.
- **MongoDB**: (Planned for future use, not required for current version).

### Steps to Set Up Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RitishXplore/skychat.git
    cd skychat
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up PostgreSQL**:
    - Install PostgreSQL if not already installed.
    - Create a new database for SkyChat.
    - Update the `config/config.json` file with your PostgreSQL database connection details.

4. **Run the application**:
    ```bash
    npm start
    ```
    The application will be accessible at [http://localhost:3000](http://localhost:3000).

5. **Optional**: If you plan to use MongoDB in the future, set up a MongoDB instance and connect it to your application.

## API Documentation

The API documentation will be added in future versions as the application grows and new endpoints are implemented.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Future Roadmap
1. Transition from monolithic to microservices architecture.
2. Integrate Kafka for inter-service communication.
3. Add support for MongoDB for certain features that require high scalability.
4. Implement additional features like video call recording, screen sharing, and group chat.

## Contribution

Feel free to fork the repository, submit issues, and open pull requests. Contributions are welcome!

---

### Contact

If you have any questions, feel free to reach out via GitHub Issues or by emailing me at [your-email@example.com].

---

