const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizador', {
    idOrganizador: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    razaoSocial: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nomeFantasia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING(18),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'organizador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idOrganizador" },
        ]
      },
    ]
  });
};
