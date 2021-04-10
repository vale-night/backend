const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_has_categoriaproduto', {
    Produto_idProduto: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'produto',
        key: 'idProduto'
      }
    },
    CategoriaProduto_idCategoriaProduto: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categoriaproduto',
        key: 'idCategoriaProduto'
      }
    }
  }, {
    sequelize,
    tableName: 'produto_has_categoriaproduto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Produto_idProduto" },
          { name: "CategoriaProduto_idCategoriaProduto" },
        ]
      },
      {
        name: "fk_Produto_has_CategoriaProduto_CategoriaProduto1_idx",
        using: "BTREE",
        fields: [
          { name: "CategoriaProduto_idCategoriaProduto" },
        ]
      },
      {
        name: "fk_Produto_has_CategoriaProduto_Produto1_idx",
        using: "BTREE",
        fields: [
          { name: "Produto_idProduto" },
        ]
      },
    ]
  });
};
