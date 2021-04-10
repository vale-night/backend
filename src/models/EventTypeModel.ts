import {
    Model,
    DataTypes,
    Optional,
  } from "sequelize";

import {sequelize} from '../db';

interface EventTypeAttributes {
    id: number;
    name: string;
    description: string;
}

interface EventTypeCreationAttributes extends Optional<EventTypeAttributes, "id"> { }

export class EventType extends Model<EventTypeAttributes, EventTypeCreationAttributes> {
    public id!: number;
    public name!: string;
    public description!: string;

    public readonly createdAt!: Date;


}

EventType.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      description: {
        type: DataTypes.STRING(45),
        allowNull: true
      }
}, {
    sequelize,
    tableName: 'EventType',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEventType" },
        ]
      },
    ]
  });
