const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evento', {
    idEvento: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    destaque: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    faixaEtaria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Endereco_idEndereco: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'endereco',
        key: 'idEndereco'
      }
    }
  }, {
    sequelize,
    tableName: 'evento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEvento" },
          { name: "Endereco_idEndereco" },
        ]
      },
      {
        name: "fk_Evento_Endereco1_idx",
        using: "BTREE",
        fields: [
          { name: "Endereco_idEndereco" },
        ]
      },
    ]
  });
};
