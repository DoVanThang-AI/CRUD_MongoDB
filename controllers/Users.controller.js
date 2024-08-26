const Users = require('../models/user.model');

const updateUsers = async (req,res) => {
    try{
        const users = await Users.create(req.body);
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    updateUsers
}