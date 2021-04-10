const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carrinho', {
    idCarrinho: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    valorTotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Carrinhocol: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Pedido_idPedido: {
      type: DataTypes.STRING(64),
      allowNull: false,
      references: {
        model: 'pedido',
        key: 'idPedido'
      }
    }
  }, {
    sequelize,
    tableName: 'carrinho',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCarrinho" },
        ]
      },
      {
        name: "fk_Carrinho_Pedido1_idx",
        using: "BTREE",
        fields: [
          { name: "Pedido_idPedido" },
        ]
      },
    ]
  });
};
