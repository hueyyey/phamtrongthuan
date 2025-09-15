const express = require('express');
const router = express.Router();

// Services & Controllers
const services = require('../services/render');
const controller = require('../controller/controller');

// View routes
router.get('/', services.home);
router.get('/manage', services.manage);
router.get('/dosage', services.dosage);
router.get('/purchase', services.purchase);
router.get('/add-drug', services.addDrug);
router.get('/update-drug', services.updateDrug);

// API routes (CRUD)
router.post('/api/drugs', controller.create);
router.get('/api/drugs', controller.find);
router.put('/api/drugs/:id', controller.update);
router.delete('/api/drugs/:id', controller.delete);

module.exports = router;
