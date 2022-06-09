const { Router } = require('express');
const router = Router();

const createNewUser = require('../controllers/createNewUser');

router.post('/users/create', createNewUser);

module.exports = router;
