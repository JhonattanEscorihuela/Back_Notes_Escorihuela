const createUserController = require('../../controllers/User/createUserController');

const createUserHandler = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw new Error(" ❌ Faltan datos para crear el usuario");
        }

        await createUserController(email, password);
        res.status(201).json({ message: 'El usuario se ha registrado exitosamente 🧑‍💻' })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = createUserHandler;
