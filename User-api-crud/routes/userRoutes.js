const express = require('express');
const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    searchUsers
} = require('../controllers/userController');

const router = express.Router();

router.post('/CreateUser', createUser);
router.get('/ListData', getUsers);
router.get('/GetUserById/:id', getUserById);
router.patch('/UpdateUserById/:id', updateUser);
router.delete('/DeleteUserById/:id', deleteUser);
router.get('/search/:key', searchUsers);

module.exports = router;
