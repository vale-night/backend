import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('mysql://root:root@localhost:3306/mydb');
