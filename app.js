const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes'); // Correct import
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
connectDB();

// Use routes
app.use('/api/employees', employeeRoutes);

module.exports = app;

