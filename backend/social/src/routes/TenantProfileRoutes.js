const {TenantProfileController} = require('../controllers');
const TenantProfileRouter = require('express').Router();


TenantProfileRouter.post('/', TenantProfileController.create);
TenantProfileRouter.get('/', TenantProfileController.getAll);
TenantProfileRouter.get('/:id', TenantProfileController.getById);
TenantProfileRouter.patch('/:id', TenantProfileController.update);
TenantProfileRouter.delete('/:id', TenantProfileController.delete);

module.exports = {TenantProfileRouter}