// Accessing environment variables
require('dotenv').config();

// Core modules
const path = require('path');

// External modules
const express = require('express');
const cors = require('cors');
// Local Utils
const rootDir = require('./utils/pathUtil');

// Routers
const errorRouter = require('./routes/errorRouter');
const itemRouter = require('./routes/itemsRouter');

// Create Express app
const app = express();

app.use(express.urlencoded({extended:true}));


app.use(express.json());
app.use(cors());

// Routes
app.use(itemRouter);
app.use(errorRouter);

// Exporting app
module.exports = app;



// Notes:------------------------------------------------------------------------------------------------

// By default all the files are private

// So give static permissions

// Best practice: Static → Logging → Parsing → Routes → Error handlers

// Order matters a lot