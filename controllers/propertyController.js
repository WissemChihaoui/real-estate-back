// controllers/propertyController.js
const Property = require('../models/Property');

// Get all properties
const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single property by ID
const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).json({ message: 'Property not found' });
        res.json(property);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new property
const createProperty = async (req, res) => {
    const property = new Property(req.body);
    
    try {
        const newProperty = await property.save();
        res.status(201).json(newProperty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a property
const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndRemove(req.params.id);
        if (!property) return res.status(404).json({ message: 'Property not found' });
        res.json({ message: 'Property deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllProperties,
    getPropertyById,
    createProperty,
    deleteProperty,
};