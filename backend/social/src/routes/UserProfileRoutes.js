const {UserProfileController} = require('../controllers');
const UserProfileRouter = require('express').Router();


UserProfileRouter.post('/', UserProfileController.create);
UserProfileRouter.get('/', UserProfileController.getAll);
UserProfileRouter.get('/:id', UserProfileController.getById);
UserProfileRouter.patch('/:id', UserProfileController.update);
UserProfileRouter.delete('/:id', UserProfileController.delete);

module.exports = {UserProfileRouter}
