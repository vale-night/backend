const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('generomusical_has_evento', {
    GeneroMusical_idGeneroMusical: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'generomusical',
        key: 'idGeneroMusical'
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
    tableName: 'generomusical_has_evento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "GeneroMusical_idGeneroMusical" },
          { name: "Evento_idEvento" },
        ]
      },
      {
        name: "fk_GeneroMusical_has_Evento_Evento1_idx",
        using: "BTREE",
        fields: [
          { name: "Evento_idEvento" },
        ]
      },
      {
        name: "fk_GeneroMusical_has_Evento_GeneroMusical1_idx",
        using: "BTREE",
        fields: [
          { name: "GeneroMusical_idGeneroMusical" },
        ]
      },
    ]
  });
};
