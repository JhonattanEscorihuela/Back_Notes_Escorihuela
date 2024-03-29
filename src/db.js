require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, URL_HOST } = process.env;

async function initializeDatabase() {
    try {
        const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
            logging: false,
            native: false,
        });

        // Verificar si la base de datos ya existe
        const databaseExists = await sequelize.query(`SELECT EXISTS(SELECT 1 FROM pg_database WHERE datname = '${DB_NAME}')`);
        const exists = databaseExists[0][0].exists;

        if (!exists) {
            // La base de datos no existe, así que la creamos
            console.log(`Database ${DB_NAME} does not exist. Creating...`);
            await sequelize.query(`CREATE DATABASE ${DB_NAME}`);
            console.log(`Database ${DB_NAME} created successfully.`);
        } else {
            console.log(`Database ${DB_NAME} already exists.`);
        }

        // Cerrar la conexión después de realizar la verificación
        await sequelize.close();
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}



initializeDatabase();

// `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
});

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Note, User } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

User.hasMany(Note);

Note.belongsTo(User);

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
