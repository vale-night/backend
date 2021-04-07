const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedido', {
    idPedido: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    valorOriginal: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    valorEspecial: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    codigoRetirada: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Endereco_idEndereco: {
      type: DataTypes.STRING(64),
      allowNull: false,
      references: {
        model: 'endereco',
        key: 'idEndereco'
      }
    },
    status: {
      type: DataTypes.ENUM('PENDENTE','EM_ANDAMENTO','CONCLUIDO'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pedido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPedido" },
        ]
      },
      {
        name: "fk_Pedido_Endereco1_idx",
        using: "BTREE",
        fields: [
          { name: "Endereco_idEndereco" },
        ]
      },
    ]
  });
};
