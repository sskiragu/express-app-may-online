import { Sequelize } from "sequelize";

const db = new Sequelize('may_onlineeeeeee', 'sam', 'Sam123#@!', {
    host : "localhost",
    dialect : "mysql"
})

export default db;