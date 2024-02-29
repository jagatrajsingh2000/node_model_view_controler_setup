const express = require('express');
const router = express.Router();
const { handleGetAllUsers, handleGetUserIds, handleUpdateUserById, handleDeleteUserById, handleCreateUser } = require('../controller/user');

router.route('/').get(handleGetAllUsers).post(handleCreateUser)

router.
    route("/:id")
    .get(handleGetUserIds)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

router.post("/",handleCreateUser)

module.exports = router;