const express = require('express');
const router = express.Router();
const userController = require('../controllers/Auth');

// Register route
router.post('/register', userController.register);

// Login route
router.post('/login', userController.login);
//moeZ@00%
// edite user route
router.put('/edit-informations/:id', userController.updateUserById);
// edite password 
router.put('/edit-password/:id', userController.EditPwd);

module.exports = router;