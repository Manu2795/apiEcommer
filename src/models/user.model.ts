import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/dataBase';
import bcrypt from 'bcryptjs';

// Interface para los atributos del usuario
interface UserAttributes {
    id: number;
    nombre: string;
    email: string;
    password?: string; // Hacemos la contraseña opcional porque no la devolveremos en las respuestas
    id_role: number;
}

//Interface para la creación del usuario( password es requerida)
interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{
    password: string;
}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public nombre!: string;
    public email!: string;
    public password!: string;
    public id_role!: number;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    // Método para verificar la contraseña
    public async comparePassword(password: string): Promise<boolean>{
        return bcrypt.compare(password, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,

    },
    nombre: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true,
       
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    id_role: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }
}, {
    tableName: 'usuarios',
    sequelize, //Pasamos la instacia de conexion
    timestamps: false,

});

export default User;