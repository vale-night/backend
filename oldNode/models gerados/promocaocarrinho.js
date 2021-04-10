const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocaocarrinho', {
    idPromocaoCarrinho: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dataInicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dataFim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cupom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    parametroPreco: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'promocaocarrinho',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPromocaoCarrinho" },
        ]
      },
    ]
  });
};
