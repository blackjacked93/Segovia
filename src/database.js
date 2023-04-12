const mysql= require('mysql');
const  {promisify} = require('util')
const {database} = require('./config');

const pool = mysql.createPool(database);

pool.getConnection((err, conection) => {
    if(err){

        if (err.code === 'PROTOCOL_COTECTION_LOST'){
            console.log('La conexion con la base se perdió');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.log('La base tiene muchas conexiones');
        }
        if (err.code === 'ECONNREFUSED'){
            console.log('Error al establecer la conexion con la base');
        }
        
        if (connection) connection.release();
            console.log('Conexión con la base con éxito');

            return;
        
    }
});

pool.query = promisify (pool.query);
module.exports = pool;