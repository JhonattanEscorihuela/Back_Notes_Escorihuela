const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Note = sequelize.define('Note', {
        note_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true, // Por defecto, la nota está activa
        },
        archived: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false, // Por defecto, la nota no está archivada
        },
        category: {
            type: DataTypes.ENUM('trabajo', 'personal', 'estudio', 'otros'), // Valores permitidos para el tipo de tarea
            allowNull: false, // No puede ser nulo
        },
    }, { timestamps: true });

    return Note;
};
