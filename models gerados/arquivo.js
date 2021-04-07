const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arquivo', {
    idArquivo: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    dataUpload: {
      type: DataTypes.DATEONLY,
    },
    caminhoArquivo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Organizador_idOrganizador: {
      type: DataTypes.STRING(64),
      allowNull: false,
      references: {
        model: 'organizador',
        key: 'idOrganizador'
      }
    },
    Cliente_idCliente: {
      type: DataTypes.STRING(64),
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'idCliente'
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
    tableName: 'arquivo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idArquivo" },
          { name: "Evento_idEvento" },
        ]
      },
      {
        name: "fk_Arquivo_Organizador1_idx",
        using: "BTREE",
        fields: [
          { name: "Organizador_idOrganizador" },
        ]
      },
      {
        name: "fk_Arquivo_Cliente1_idx",
        using: "BTREE",
        fields: [
          { name: "Cliente_idCliente" },
        ]
      },
      {
        name: "fk_Arquivo_Evento1_idx",
        using: "BTREE",
        fields: [
          { name: "Evento_idEvento" },
        ]
      },
    ]
  });
};
