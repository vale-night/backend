const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_has_carrinho', {
    Produto_idProduto: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'produto',
        key: 'idProduto'
      }
    },
    Carrinho_idCarrinho: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'carrinho',
        key: 'idCarrinho'
      }
    }
  }, {
    sequelize,
    tableName: 'produto_has_carrinho',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Produto_idProduto" },
          { name: "Carrinho_idCarrinho" },
        ]
      },
      {
        name: "fk_Produto_has_Carrinho_Carrinho1_idx",
        using: "BTREE",
        fields: [
          { name: "Carrinho_idCarrinho" },
        ]
      },
      {
        name: "fk_Produto_has_Carrinho_Produto1_idx",
        using: "BTREE",
        fields: [
          { name: "Produto_idProduto" },
        ]
      },
    ]
  });
};
