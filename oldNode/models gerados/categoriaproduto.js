const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoriaproduto', {
    idCategoriaProduto: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    categoriaPai_idCategoria: {
      type: DataTypes.STRING(64),
      allowNull: false,
      references: {
        model: 'categoriaproduto',
        key: 'idCategoriaProduto'
      }
    }
  }, {
    sequelize,
    tableName: 'categoriaproduto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCategoriaProduto" },
        ]
      },
      {
        name: "fk_CategoriaProduto_CategoriaProduto1_idx",
        using: "BTREE",
        fields: [
          { name: "categoriaPai_idCategoria" },
        ]
      },
    ]
  });
};
