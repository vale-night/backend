const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagamento', {
    idPagamento: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Pedido_idPedido: {
      type: DataTypes.STRING(64),
      allowNull: false,
      references: {
        model: 'pedido',
        key: 'idPedido'
      }
    },
    status: {
      type: DataTypes.ENUM('PROCESSANDO','PAGO','CANCELADO'),
      allowNull: true
    },
    hash: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pagamento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPagamento" },
        ]
      },
      {
        name: "fk_Pagamento_Pedido1_idx",
        using: "BTREE",
        fields: [
          { name: "Pedido_idPedido" },
        ]
      },
    ]
  });
};
