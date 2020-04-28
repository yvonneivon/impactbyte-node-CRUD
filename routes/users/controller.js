const users = require("../../models/users");

module.exports = {
    getAll : (req, res) => {
       try {
           res.status(200).json({
               data:users,
               message: 'Get all users data',
           })
       } catch (error) {
           res.json(error);
       }
    },
    addUser: (req, res) => {
        try {
            const { name, address } = req.body;
            const newUser = {
                id: users.length + 1,
                name,
                address,
            };

            users.push(newUser);

            res.status(200).json({
                message: 'Create new data succeed!',
                data: users
            })
        } catch (error) {
            res.json(error)
        }
    },
    editUser: (req, res) => {
        try {
            const { id } = req.params;
            const { name, address } = req.body;

            const editUser = {
                id: Number(id),
                name,
                address,
            };

            users.splice(id -1, 1, editUser);

            res.status(200).json({
                message: "User changed!",
                data: users,
            })
        } catch (error) {
            res.json(error);
        }
    },
    filterbyAddress: (req, res) => {
        const { address } = req.query.address;

        const filteredUser = users.filter((element) => {
            return element.address === address
        });

        res.status(200).json({
            message: "User data filtered by address",
            data: filteredUser
    })

    },
    findByID: (req, res) => {
        const { id } = req.query;

        const filteredUser = useres.find((element) => {
            return element.id === Number(id);
        })

        res.status(200).json({
            message: "User data filtered by ID",
            data: filteredUser
        })
    },
    deleteAll: (req, res) => {
        try {
            res.status(200).json({
                message: 'All users deleted!',
                data: []
            })
        } catch (error){
            res.json(error);
        }
    },
    deleteByID: (req, res) => {
        try {
            const { id } = req.params.id;

            users.splice(id -1, 1);

            res.status(200).json({
                message: `User ${id} is deleted!`,
                data: users
            })
        } catch (error) {
            res.json(error);
        }
    },
};