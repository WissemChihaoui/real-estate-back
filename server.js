// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

//app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Import and use property routes
const propertyRoutes = require('./routes/propertyRoutes');
const authAccesRoutes = require('./routes/authRoutes');
app.use('/api/properties', propertyRoutes);
app.use('/auth/user', authAccesRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
