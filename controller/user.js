const {User} = require('../models/userSchema');

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserIds(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, { lastName: "hello"});
    return res.json({status: "Success",});
}

async function handleDeleteUserById(req, res) {
    const user = await User.findByIDAndDelete(req.params.id);
    return res.json({status: "Success",});
}

async function handleCreateUser(req, res) {
    const user = await User.create({ name: req.body.name, email: req.body.email});
    return res.json(user);
}

module.exports = {
    handleGetAllUsers,
    handleGetUserIds,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
}