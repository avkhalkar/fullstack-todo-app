// External modules
const { check } = require("express-validator");

// Item-validator
exports.itemValidation = [

    // Task validation
    check("task")
        .trim()
        .notEmpty()
        .withMessage("Please add a task"),

    // Date validation
    check("date")
        .notEmpty()
        .withMessage("Please provide a date")
        .isISO8601()
        .withMessage("Date must be a valid ISO date")
        .toDate(), // Converts to Mongoose-accepted-date-format

    // Completion validation
    check("completed")
        .notEmpty()
        .withMessage("Completion status is required")
        .isBoolean()
        .withMessage("Completed must be true or false")
        .toBoolean() // Converts to boolean
];