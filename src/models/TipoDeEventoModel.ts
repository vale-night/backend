import {
    Model,
    DataTypes,
    Optional,
  } from "sequelize";

import {sequelize} from '../db';

interface TipoDeEventoAttributes {
    idTipoDeEvento: number;
    nome: string;
    descricao: string;
}

interface TipoDeEventoCreationAttributes extends Optional<TipoDeEventoAttributes, "idTipoDeEvento"> {

}

export class TipoDeEvento extends Model<TipoDeEventoAttributes, TipoDeEventoCreationAttributes> {
    public idTipoDeEvento!: number;
    public name!: string;
    public descricao!: string;

    public readonly createdAt!: Date;


}

TipoDeEvento.init({
    idTipoDeEvento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      descricao: {
        type: DataTypes.STRING(45),
        allowNull: true
      }
}, {
    sequelize,
    tableName: 'tipodeevento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTipoDeEvento" },
        ]
      },
    ]
  });

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tipodeevento', {
      idTipoDeEvento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      descricao: {
        type: DataTypes.STRING(45),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'tipodeevento',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "idTipoDeEvento" },
          ]
        },
      ]
    });
  };
  