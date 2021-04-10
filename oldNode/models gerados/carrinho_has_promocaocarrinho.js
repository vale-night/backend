const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carrinho_has_promocaocarrinho', {
    Carrinho_idCarrinho: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'carrinho',
        key: 'idCarrinho'
      }
    },
    PromocaoCarrinho_idPromocaoCarrinho: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'promocaocarrinho',
        key: 'idPromocaoCarrinho'
      }
    }
  }, {
    sequelize,
    tableName: 'carrinho_has_promocaocarrinho',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Carrinho_idCarrinho" },
          { name: "PromocaoCarrinho_idPromocaoCarrinho" },
        ]
      },
      {
        name: "fk_Carrinho_has_PromocaoCarrinho_PromocaoCarrinho1_idx",
        using: "BTREE",
        fields: [
          { name: "PromocaoCarrinho_idPromocaoCarrinho" },
        ]
      },
      {
        name: "fk_Carrinho_has_PromocaoCarrinho_Carrinho1_idx",
        using: "BTREE",
        fields: [
          { name: "Carrinho_idCarrinho" },
        ]
      },
    ]
  });
};
