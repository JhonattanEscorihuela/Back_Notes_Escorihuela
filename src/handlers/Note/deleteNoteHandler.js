const deleteNoteController = require('../../controllers/Note/deleteNoteController');

const deleteNoteHandler = async (req, res) => {
    const { id } = req.params;

    try {
        await deleteNoteController(id);
        res.status(200).json({ message: 'La nota ha sido eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = deleteNoteHandler;
