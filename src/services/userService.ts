import { User } from '../models/User';

export class UserService {
  static async createUser(data: any) {
    return await User.create(data);
  }

  static async getAllUsers() {
    return await User.findAll();
  }

  static async getUserById(id: number) {
    return await User.findByPk(id);
  }

  static async updateUser(id: number, data: any) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.update(data);
    }
    throw new Error('User not found');
  }

  static async deleteUser(id: number) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
    } else {
      throw new Error('User not found');
    }
  }
}
