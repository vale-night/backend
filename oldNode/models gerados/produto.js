const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto', {
    idProduto: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    nomeProduto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    preco: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    precoEspecial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dataInicioPromocao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dataFimPromocao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Evento_idEvento: {
      type: DataTypes.STRING(64),
      allowNull: false,
      references: {
        model: 'evento',
        key: 'idEvento'
      }
    },
    TipoDeProduto_idTipoDeProduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipodeproduto',
        key: 'idTipoDeProduto'
      }
    },
    SKU: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProduto" },
        ]
      },
      {
        name: "fk_Produto_Evento1_idx",
        using: "BTREE",
        fields: [
          { name: "Evento_idEvento" },
        ]
      },
      {
        name: "fk_Produto_TipoDeProduto1_idx",
        using: "BTREE",
        fields: [
          { name: "TipoDeProduto_idTipoDeProduto" },
        ]
      },
    ]
  });
};
