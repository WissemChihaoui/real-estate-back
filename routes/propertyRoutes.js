// routes/propertyRoutes.js
const express = require('express');
const router = express.Router();
const {
    getAllProperties,
    getPropertyById,
    createProperty,
    deleteProperty,
} = require('../controllers/propertyController');

// Define routes
router.get('/', getAllProperties); // GET all properties
router.get('/:id', getPropertyById); // GET a single property by ID
router.post('/', createProperty); // POST a new property
router.delete('/:id', deleteProperty); // DELETE a property

module.exports = router;