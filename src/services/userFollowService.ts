import { UserFollow } from '../models/UserFollow';

export class UserFollowService {
  static async createUserFollow(data: any) {
    return await UserFollow.create(data);
  }

  static async getAllUserFollows() {
    return await UserFollow.findAll();
  }

  static async getUserFollowById(id: number) {
    return await UserFollow.findByPk(id);
  }

  static async updateUserFollow(id: number, data: any) {
    const userFollow = await UserFollow.findByPk(id);
    if (userFollow) {
      return await userFollow.update(data);
    }
    throw new Error('User follow not found');
  }

  static async deleteUserFollow(id: number) {
    const userFollow = await UserFollow.findByPk(id);
    if (userFollow) {
      await userFollow.destroy();
    } else {
      throw new Error('User follow not found');
    }
  }
}
