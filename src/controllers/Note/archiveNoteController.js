const { Note } = require('../../db');

module.exports = async (id) => {
    try {
        const note = await Note.findByPk(id);
        if (!note) {
            throw new Error('La nota no existe');
        }
        // Actualiza el campo 'archived' a true
        await Note.update({ archived: true }, { where: { note_id: id } });
    } catch (error) {
        throw new Error(`Error al archivar la nota: ${error.message}`);
    }
};


