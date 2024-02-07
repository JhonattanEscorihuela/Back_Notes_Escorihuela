const { Note } = require('../../db');

const deleteNoteController = async (id) => {
    try {
        const note = await Note.findByPk(id);
        if (!note) {
            throw new Error('La nota no existe');
        }
        await note.destroy();
    } catch (error) {
        throw new Error(`Error al eliminar la nota: ${error.message}`);
    }
};

module.exports = deleteNoteController;
