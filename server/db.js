const { Sequelize } = require('sequelize')
/////PostgreSQL
////port 5432
/////password 000420ana

module.exports = new Sequelize(
    process.env.DB_Name,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        
})