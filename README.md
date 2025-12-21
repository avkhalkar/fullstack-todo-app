Fullstack Todo App

A modular full-stack Todo application built with Node.js, Express, and MongoDB, with a vanilla JavaScript (ES modules) frontend.
Demonstrates RESTful CRUD APIs, MVC structure, server-side validation, and async client–server communication.

Repository: https://github.com/avkhalkar/fullstack-todo-app

About

This project is an educational full-stack example showing how to:

Structure a Node/Express backend using MVC

Build RESTful CRUD APIs

Validate requests with express-validator

Consume APIs using fetch from vanilla JS

Persist data with MongoDB (Mongoose)

Features

Create, read, update, delete todos

Server-side input validation

Clean separation: routes, controllers, models, frontend

Async API communication

Tech Stack

Backend

Node.js

Express.js

MongoDB + Mongoose

express-validator

Frontend

HTML, CSS

Vanilla JavaScript (ES modules)

Fetch API

Project Structure
fullstack-todo-app/
├─ todo-backend/    # Express server, routes, controllers, models
├─ todo-frontend/   # Static frontend (HTML/CSS/JS)
├─ README.md
└─ LICENSE

Quick Start (Local)
Prerequisites

Node.js (v16+)

MongoDB (local or Atlas)

1) Clone
git clone https://github.com/avkhalkar/fullstack-todo-app.git
cd fullstack-todo-app

2) Backend
cd todo-backend
npm install


Create .env:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/fullstack-todo-app


Run:

npm start
# or
npm run dev


Backend runs at: http://localhost:3000

3) Frontend
cd todo-frontend
# open index.html directly
# or (recommended)
serve .


Ensure frontend fetch URLs point to http://localhost:3000.

API (Essentials)

Base URL: http://localhost:3000/api/todos

Method	Endpoint	Description
GET	/	Get all todos
GET	/:id	Get todo by id
POST	/	Create todo
PUT	/:id	Update todo
DELETE	/:id	Delete todo

POST body example

{
  "title": "Buy milk",
  "completed": false,
  "dueDate": "2025-12-31"
}

Validation & Errors

Server-side validation via express-validator

Invalid input → 400 Bad Request with JSON errors

Graceful handling of 404 and 500 errors

Persistence

MongoDB via Mongoose

Todo fields:

title (required)

completed (default: false)

dueDate (optional)

timestamps

License

MIT — see LICENSE

Author

avkhalkar
https://github.com/avkhalkar