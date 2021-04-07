const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('endereco', {
    idEndereco: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    rua: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    uf: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    latitude: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    longitude: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Organizador_idOrganizador: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'organizador',
        key: 'idOrganizador'
      }
    },
    Cliente_idCliente: {
      type: DataTypes.STRING(64),
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'idCliente'
      }
    },
    tipo: {
      type: DataTypes.ENUM('COMERCIAL','COBRANCA'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'endereco',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEndereco" },
        ]
      },
      {
        name: "fk_Endereco_Organizador_idx",
        using: "BTREE",
        fields: [
          { name: "Organizador_idOrganizador" },
        ]
      },
      {
        name: "fk_Endereco_Cliente1_idx",
        using: "BTREE",
        fields: [
          { name: "Cliente_idCliente" },
        ]
      },
    ]
  });
};
