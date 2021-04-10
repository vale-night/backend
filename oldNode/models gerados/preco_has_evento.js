const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preco_has_evento', {
    Preco_idPreco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'preco',
        key: 'idPreco'
      }
    },
    Evento_idEvento: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'evento',
        key: 'idEvento'
      }
    }
  }, {
    sequelize,
    tableName: 'preco_has_evento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Preco_idPreco" },
          { name: "Evento_idEvento" },
        ]
      },
      {
        name: "fk_Preco_has_Evento_Evento1_idx",
        using: "BTREE",
        fields: [
          { name: "Evento_idEvento" },
        ]
      },
      {
        name: "fk_Preco_has_Evento_Preco1_idx",
        using: "BTREE",
        fields: [
          { name: "Preco_idPreco" },
        ]
      },
    ]
  });
};
