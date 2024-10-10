// routes/propertyRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllProperties,
  getPropertyById,
  createProperty,
  deleteProperty,
  editProperty,
} = require('../controllers/propertyController');

// Define routes
router.get('/get-properties', getAllProperties); // GET all properties
router.get('/get-propertie/:id', getPropertyById); // GET a single property by ID
router.put('/edite-propertie/:id', editProperty);
router.post('/create-propertie', createProperty); // POST a new property
router.delete('/delte-propertie/:id', deleteProperty); // DELETE a property

module.exports = router;
