const createNoteController = require('../../controllers/Note/createNoteController');

const createNoteHandler = async (req, res) => {
    const { title, content, active, archived, category } = req.body;

    try {
        if (!title || !content || !archived || !active || !category) {
            throw new Error(" ❌ Faltan datos para crear la nota");
        }

        await createNoteController(title, content, active, archived, category);
        res.status(201).json({ message: 'La nota se ha registrado exitosamente 🧑‍💻' })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = createNoteHandler;
