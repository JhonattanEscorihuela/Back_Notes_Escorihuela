const editNoteController = require('../../controllers/Note/editNoteController');

const editNoteHandler = async (req, res) => {
    const { id } = req.params;
    const { title, content, active, archived, category } = req.body;

    try {
        await editNoteController(id, { title, content, active, archived, category });
        res.status(200).json({ message: 'La nota ha sido editada correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = editNoteHandler;
