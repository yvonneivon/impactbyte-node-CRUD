const todos = require('../../models/todos');

module.exports = {
    getAll: (req, res) => {
        try {
            res.status(200).json({ data: todos, message: 'Get all users data' })
        } catch (error){
            res.json(error)
        }
    },
    // ADD
    addTodo: (req, res) => {
        try {
            const { todo, userId } = req.body;
            const newTodo = {
                id: todos.length + 1,
                userId,
                todo
            }
            todos.push(newTodo);

            res.status(200).json({ message: 'Added todo succeed!', data: todos })
        } catch (error){
            res.json(error)
        }
    },
    // EDIT
    editTodo: (req, res) => {
        try {
            const id = req.params.id;
            const { todo, userId } = req.body;

            const editTodo = {
                id: Number(id),
                userId: Number(userId),
                todo
            };
            todos.splice(id -1, 1, editTodo);

            res.status(200).json({ message: 'Edited!', data: todos })
        } catch (error){
            res.json(error);
        }
    },
    // DELETE
    deleteTodo: (req, res) => {
        try {
            const id = req.params.id;
            todos.splice(id -1, 1);
            res.status(200).json({ message: `Todo ${id} is deleted!`, data: todos })
        } catch (error){
            res.json(error);
        }
    },
    // FIND TODO ID
    findbyId: (req, res) => {
        try {
            const id = req.params.id;
            const filteredTodos = todos.filter((element) => {
                return element.id === Number(id);
            })
        res.status(200).json({ message: 'Search todo by ID', data: filteredTodos })
    } catch (error) {
        res.json(error);
    }
},
    // FIND TODO BY USER ID
    findbyUserId: (req, res) => {
        try {
            const userId = req.params.userId;
            const filteredTodos = todos.filter((element) => {
                return element.userId === Number(userId);
            });
            res.status(200).json({ message: 'Search todo by user id', data: filteredTodos })
        } catch (error){
            res.json(error);
        }
    }
};