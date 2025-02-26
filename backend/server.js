const express = require('express');
const bodyParser = require('body-parser');
const punycode = require('punycode');

const app = express();
require('dotenv').config();

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Simple route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Node.js authentication application." });
});

// Routes
require('./routes/authRoutes')(app);

// Set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
