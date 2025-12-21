// Loading env files
require('dotenv').config();
const PORT = process.env.PORT;
const DB_PATH = process.env.DB_PATH;

// External modules
const mongoose = require('mongoose');

// App module
const app = require('./app');

mongoose.connect(DB_PATH)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('DB connection failed:', err);
  });
