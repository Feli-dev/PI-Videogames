const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('gender', {
    ID: {
        type: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
    }
  });
};
