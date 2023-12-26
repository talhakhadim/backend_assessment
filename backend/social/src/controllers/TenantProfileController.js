const {db} = require('../../database/models');


module.exports = {
    //create a new tenant profile
    create:async (req, res) => {
        try {
            const tenantProfile = await db.TenantProfile.create(req.body);
           return res.status(201).json(tenantProfile);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

    //get all tenant profiles
    getAll:async (req, res) => {
        try {
            const tenantProfiles = await db.TenantProfile.findAll();
            return res.status(200).json(tenantProfiles);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

    //get a tenant profile by id
    getById:async (req, res) => {
        try {
            const tenantProfile = await db.TenantProfile.findOne({
                where: {
                    tenant_id: req.params.id
                }
            });
            return res.status(200).json(tenantProfile);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },
    
    //update a tenant profile
    update:async (req, res) => {
        try {
            const tenantProfile = await db.TenantProfile.update(req.body, {
                where: {
                    tenant_id: req.params.id
                }
            });
            return res.status(200).json(tenantProfile);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

    //delete a tenant profile
    delete:async (req, res) => {
        try {
            const tenantProfile = await db.TenantProfile.destroy({
                where: {
                    tenant_id: req.params.id
                }
            });
            return res.status(200).json(tenantProfile);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }
}