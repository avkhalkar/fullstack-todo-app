// External modules
const express = require('express');

// Validator
const itemValidator = require('../validators/itemValidator');

// Controller
const itemController = require('../controllers/itemsController');

// Creating router
const itemRouter = express.Router();

// Routes(CRUD)

// Create
itemRouter.post("/api/create-item", itemValidator.itemValidation, itemController.createTodoItem);

// Read
itemRouter.get("/api/get-items", itemController.getItems);

// Update
itemRouter.put("/api/edit-item/:id", itemValidator.itemValidation, itemController.editItem);

// Delete
itemRouter.delete("/api/delete-item/:id", itemController.deleteItem);

// Exporting router
module.exports = itemRouter;

