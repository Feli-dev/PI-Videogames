const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('gender', {
    ID: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    }
  });
};
