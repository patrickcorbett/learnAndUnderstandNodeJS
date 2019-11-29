// include the dependencies
const util = require( 'util' );
const mysql = require( 'mysql' );

var addressDB = {
    makeDb: function () {
        // connect as root user
        const connection = mysql.createConnection({
            multipleStatements: true,
            host: 'localhost',
            user: 'root',
            password: ''
        });
        return {
            query(sql, args) {
                return util.promisify(connection.query)
                    .call(connection, sql, args);
            },
            close() {
                return util.promisify(connection.end).call(connection);
            }
        };
    }
}

module.exports = addressDB;