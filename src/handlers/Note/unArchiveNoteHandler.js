const unArchiveNoteController = require('../../controllers/Note/unArchiveNoteController');

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        await unArchiveNoteController(id);
        res.status(201).json({ message: 'La nota ha sido des-archivada correctamente!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}