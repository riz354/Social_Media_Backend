import { Sequelize } from 'sequelize';

const env = process.env
console.log(env,"env")
const sequelize = new Sequelize(env.DB_name, env.DB_user , env.DB_password, {
    host: env.DB_host,
    dialect: env.DB_dialect
});


const connect = async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default sequelize;
export {connect};