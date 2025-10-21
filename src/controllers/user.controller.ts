//aquí va el CRUD
import { Request, Response } from "express"; // Importa los tipos Request y Response de Express
import { UserService } from "../services/user.service"; // Importa el servicio de usuario


const userService = new UserService();



export const getUsers = async ( _req: Request, res: Response): Promise<Response> => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (error: any){
        return res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
    }
};