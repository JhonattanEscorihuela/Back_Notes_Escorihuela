const deleteUserController = require('../../controllers/User/deleteUserController');

module.exports = async (req, res) => {
    const { id } = req.params;

    try {
        await deleteUserController(id);
        res.status(200).json({ message: 'El usuario ha sido eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


