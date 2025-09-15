const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const connectMongo = require('./server/database/connect');
const PORT = process.env.PORT || 3100;

// View engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // để nhận JSON từ client
app.use(express.static('assets'));
app.use(morgan('tiny'));

// Connect to Database
connectMongo();

// Load routes
const routes = require('./server/routes/routes');
app.use('/', routes); // gắn toàn bộ routes

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  console.log(`👉 Open http://localhost:${PORT}`);
});
