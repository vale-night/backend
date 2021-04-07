const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evento_has_orientacaosexual', {
    Evento_idEvento: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'evento',
        key: 'idEvento'
      }
    },
    OrientacaoSexual_idOrientacaoSexual: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orientacaosexual',
        key: 'idOrientacaoSexual'
      }
    }
  }, {
    sequelize,
    tableName: 'evento_has_orientacaosexual',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Evento_idEvento" },
          { name: "OrientacaoSexual_idOrientacaoSexual" },
        ]
      },
      {
        name: "fk_Evento_has_OrientacaoSexual_OrientacaoSexual1_idx",
        using: "BTREE",
        fields: [
          { name: "OrientacaoSexual_idOrientacaoSexual" },
        ]
      },
      {
        name: "fk_Evento_has_OrientacaoSexual_Evento1_idx",
        using: "BTREE",
        fields: [
          { name: "Evento_idEvento" },
        ]
      },
    ]
  });
};
