import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', 'mysqldb00', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;