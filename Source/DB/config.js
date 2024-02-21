import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('social_media_backend', 'postgres', 'riz354', {
    host: 'localhost',
    dialect: 'postgres'
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