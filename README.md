# Real-Time Chat Application

This is a real-time chat application that allows multiple users to join chat rooms and communicate with each other in real-time. The application is built using Node.js, Express.js, and Socket.IO for real-time communication.

## Features

- Multiple users can join chat rooms and send messages to each other.
- Real-time message broadcasting to all users in the chat room.
- Clean user disconnection handling.
- Basic UI for entering a username, selecting a chat room, and sending messages.

## Installation and Setup

1. Clone this repository to your local machine or download the ZIP file and extract it.
2. Ensure you have Node.js and npm installed on your system.
3. Open a terminal and navigate to the project directory.
4. Run `npm install` to install the required dependencies.

## Usage

1. Start the server:
   ```bash
   npm start
   ```
   The server will be running at `http://localhost:3000`.

2. Open your web browser and go to `http://localhost:3000/`.
3. Enter your username and the chat room name to join.
4. Start chatting with other users in the same chat room.

## Technologies Used

- Node.js
- Express.js
- Socket.IO

## Server-Side Code Explanation

The server-side code (app.js) handles the following events:

- `connection`: Handles new user connections and manages chat room information.
- `join`: Adds a user to a specific chat room and broadcasts a welcome message to all users in that room.
- `sendMessage`: Receives a message from a user and broadcasts it to all users in the same chat room.
- `disconnect`: Handles user disconnections and removes the user from the chat room.

## Client-Side Code Explanation

The client-side code (index.html) allows users to interact with the chat application:

- Users can enter their username and the chat room name they want to join.
- The chat interface displays messages sent by users in the same chat room in real-time.
- Users can send messages to the chat room by typing in the input field and clicking the "Send" button.
