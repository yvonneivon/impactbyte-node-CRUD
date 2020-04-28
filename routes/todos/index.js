const express = require('express');
const router = express.Router();

router.get('/', require('./controller').getAll);
router.post('/', require('./controller').addTodo);
router.put('./:id', require('./controller').editTodo);
router.delete('/:id', require('./controller').deleteTodo);

router.get('./findTodo/:id', require('./controller').findById);
router.get('./findUser/:userId', require('./controller').findByUserId);

module.exports = router;
