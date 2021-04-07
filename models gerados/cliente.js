const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    idCliente: {
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
    cpf: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCliente" },
        ]
      },
    ]
  });
};
