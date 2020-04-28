const express = require('express');
const router = express.Router();

router.get('/', require('./controller').getAll);
router.post('/', require('./controller').addUser);
router.put('/:id', require('./controller').editUser);
router.get('/filterByAddress', require('./controller').filterByAddress);
router.get('/findById', require('./controller').findById);
router.delete('/delete/:id', require('./controller').deleteById);
router.delete('/deleteAll', require('./controller').deleteAll);

module.exports = router;

// destructuring diatas jadi begini:
// const { getAll, addUser, editUser, filterByAddress, findById, deleteById, deleteAll } = require("./controller");