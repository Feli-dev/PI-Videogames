const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('gender', {
    ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
    }
  }, { timestamps: false });
};
