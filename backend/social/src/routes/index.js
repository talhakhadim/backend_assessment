const {UserProfileRouter} = require('./UserProfileRoutes');
const {TenantProfileRouter} = require('./TenantProfileRoutes');
const Router = require('express').Router();



Router.use('/user-profile', UserProfileRouter);
Router.use('/tenant-profile', TenantProfileRouter);

module.exports = Router;