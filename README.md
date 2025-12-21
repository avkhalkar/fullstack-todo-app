# Fullstack Todo App

A modular full-stack Todo application demonstrating RESTful CRUD APIs, MVC architecture, server-side validation, and async client-server communication using Node.js, Express, MongoDB, and vanilla JavaScript.

**Repository:** [github.com/avkhalkar/fullstack-todo-app](https://github.com/avkhalkar/fullstack-todo-app)

---

## Overview

This educational project showcases how to build a complete full-stack application with:

- Structured Node/Express backend using MVC pattern
- RESTful CRUD APIs with proper error handling
- Server-side validation using express-validator
- Vanilla JavaScript frontend consuming APIs via Fetch
- MongoDB persistence layer with Mongoose ODM

---

## Features

- **CRUD Operations**: Create, read, update, and delete todos
- **Input Validation**: Server-side validation with detailed error messages
- **Clean Architecture**: Separation of concerns with routes, controllers, and models
- **Async Communication**: Modern fetch-based API calls from the frontend
- **Data Persistence**: MongoDB storage with Mongoose schemas

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- express-validator

### Frontend
- HTML5 & CSS3
- Vanilla JavaScript (ES modules)
- Fetch API

---

## Project Structure

```
fullstack-todo-app/
├─ todo-backend/          # Express server
│  ├─ routes/             # API route definitions
│  ├─ controllers/        # Business logic
│  ├─ models/             # Mongoose schemas
│  └─ ...
├─ todo-frontend/         # Static frontend
│  ├─ index.html
│  ├─ style.css
│  ├─ app.js
│  └─ ...
├─ README.md
└─ LICENSE
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local instance or MongoDB Atlas)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/avkhalkar/fullstack-todo-app.git
cd fullstack-todo-app
```

**2. Set up the backend**

```bash
cd todo-backend
npm install
```

Create a `.env` file in the `todo-backend` directory:

```env
PORT=3000
MONGODB_URI=<your-mongodb-atlas-connection-string>
```

**Note:** Please create a MongoDB Atlas cluster and replace `<your-mongodb-atlas-connection-string>` with your actual connection string. You can get this from your [MongoDB Atlas Dashboard](https://cloud.mongodb.com/).

Example connection string format:
```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/fullstack-todo-app?retryWrites=true&w=majority
```

Start the backend server:

```bash
npm start
# or for development with auto-restart
npm run dev
```

Backend will be running at: `http://localhost:3000`

**3. Set up the frontend**

```bash
cd todo-frontend
```

You can either:
- Open `index.html` directly in your browser, or
- Use a local server (recommended):

```bash
npx serve .
```

Ensure all fetch URLs in the frontend code point to `http://localhost:3000`.

---

## API Reference

**Base URL:** `http://localhost:3000/api/todos`

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Retrieve all todos |
| GET | `/:id` | Retrieve a specific todo by ID |
| POST | `/` | Create a new todo |
| PUT | `/:id` | Update an existing todo |
| DELETE | `/:id` | Delete a todo |

### Request Examples

**Create a new todo (POST /)**

```json
{
  "task": "Buy milk",
  "date": "2025-12-31",
  "completed": false
}
```

**Update a todo (PUT /:id)**

```json
{
  "task": "Buy organic milk",
  "date": "2025-12-31",
  "completed": true
}
```

---

## Data Model

### TodoItem Schema

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| task | String | Yes | - | Todo task description |
| date | Date | Yes | - | Task due date |
| completed | Boolean | No | undefined | Task completion status |
| timestamps | Auto | Auto | Auto | createdAt, updatedAt |

---

## Validation & Error Handling

- **Server-side validation** using express-validator ensures data integrity
- **400 Bad Request** responses include detailed JSON error messages for invalid input
- **404 Not Found** for non-existent resources
- **500 Internal Server Error** with graceful error handling for server issues

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

**avkhalkar**  
GitHub: [@avkhalkar](https://github.com/avkhalkar)