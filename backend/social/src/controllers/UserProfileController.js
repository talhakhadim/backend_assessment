const {db} = require('../../database/models');

module.exports = {
    //create a new user profile
    create:async (req, res) => {
        try {
            const userProfile = await db.UserProfile.create(req.body);
           return res.status(201).json(userProfile);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

    //get all user profiles
    getAll:async (req, res) => {
        try {
            const userProfiles = await db.UserProfile.findAll();
            return res.status(200).json(userProfiles);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

    //get a user profile by id
    getById:async (req, res) => {
        try {
            const userProfile = await db.UserProfile.findOne({
                where: {
                    user_id: req.params.id
                }
            });
            return res.status(200).json(userProfile);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },
    
    //update a user profile
    update:async (req, res) => {
        try {
            const userProfile = await db.UserProfile.update(req.body, {
                where: {
                    user_id: req.params.id
                }
            });
            return res.status(200).json(userProfile);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

    //delete a user profile
    delete:async (req, res) => {
        try {
            const userProfile = await db.UserProfile.destroy({
                where: {
                    user_id: req.params.id
                }
            });
            return res.status(200).json(userProfile);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

}