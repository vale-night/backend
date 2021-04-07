const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipodeevento_has_evento', {
    TipoDeEvento_idTipoDeEvento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tipodeevento',
        key: 'idTipoDeEvento'
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
    tableName: 'tipodeevento_has_evento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TipoDeEvento_idTipoDeEvento" },
          { name: "Evento_idEvento" },
        ]
      },
      {
        name: "fk_TipoDeEvento_has_Evento_Evento1_idx",
        using: "BTREE",
        fields: [
          { name: "Evento_idEvento" },
        ]
      },
      {
        name: "fk_TipoDeEvento_has_Evento_TipoDeEvento1_idx",
        using: "BTREE",
        fields: [
          { name: "TipoDeEvento_idTipoDeEvento" },
        ]
      },
    ]
  });
};
