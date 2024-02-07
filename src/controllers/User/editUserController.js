const { User } = require('../../db');

module.exports = async (id, updatedFields) => {

    try {
        const note = await User.findByPk(id);
        if (!note) {
            throw new Error('El usuario no existe');
        }
        await note.update(updatedFields);
    } catch (error) {
        throw new Error(`Error al editar el usuario: ${error.message}`);
    }

}