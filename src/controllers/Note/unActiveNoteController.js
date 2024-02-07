const { Note } = require('../../db');

module.exports = async (id) => {
    try {
        const note = await Note.findByPk(id);
        if (!note) {
            throw new Error('La nota no existe');
        }
        // Actualiza el campo 'active' a false
        await Note.update({ active: false }, { where: { note_id: id } });
    } catch (error) {
        throw new Error(`Error al des-activar la nota: ${error.message}`);
    }
};