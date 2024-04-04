import mysql from 'mysql2';
import { config } from 'dotenv';

const connection = () => {
    config();
    const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD,DB_PORT } = process.env;
    return mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'login',
        port:'3307'
    });
};

export default connection().promise();
