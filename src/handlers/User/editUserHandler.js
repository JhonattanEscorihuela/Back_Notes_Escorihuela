const editUserController = require('../../controllers/User/editUserController');


module.exports = async (req, res) => {

    const { id } = req.params;
    const { email, password } = req.body;

    try {
        await editUserController(id, { email, password });
        res.status(200).json({ message: 'El usuarui ha sido editado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}