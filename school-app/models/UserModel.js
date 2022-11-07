import { Sequelize} from 'sequelize'
import db from '../configs/db.js'
const {DataTypes} = Sequelize

const User = db.define('User', {
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

export default User


