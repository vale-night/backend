import {
    Model,
    DataTypes,
    Optional,
} from "sequelize";

import { sequelize } from '../db';

interface EventAttributes {
    id: string;
    name: string;
    description: string;
    highlight: boolean;
    ageRange: string;
}

interface EventCreationAttributes extends Optional<EventAttributes, "id"> { }

export class Event extends Model<EventAttributes, EventCreationAttributes> {
    public id!: string;
    public name!: string;
    public description!: string;
    public highlight: boolean;
    public ageRange: string;
}

Event.init({
    id: {
        type: DataTypes.STRING(64),
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
    },
    highlight: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    ageRange: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    // Endereco_idEndereco: {
    //   type: DataTypes.STRING(64),
    //   allowNull: false,
    //   primaryKey: true,
    //   references: {
    //     model: 'endereco',
    //     key: 'idEndereco'
    //   }
    // }
}, {
    sequelize,
    tableName: 'event',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "idEvento" },
                { name: "Endereco_idEndereco" },
            ]
        },
        //   {
        //     name: "fk_Evento_Endereco1_idx",
        //     using: "BTREE",
        //     fields: [
        //       { name: "Endereco_idEndereco" },
        //     ]
        //   },
    ]
});

