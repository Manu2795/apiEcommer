import User from '../models/user.model';

export class UserService {
    public async getAllUsers(): Promise<User[]> {
        return await User.findAll(); // SELECT * FROM usuarios;
    }

    public async deleteUser(id: number): Promise<number> {
        return await User.destroy({ where: { id } }); // DELETE FROM usuarios WHERE id = ?
    }
}