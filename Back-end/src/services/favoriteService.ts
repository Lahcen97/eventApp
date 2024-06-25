import { Favorite } from '../models/Favorite';

export class FavoriteService {
  static async createFavorite(data: any) {
    return await Favorite.create(data);
  }

  static async getAllFavorites() {
    return await Favorite.findAll();
  }

  static async getFavoriteById(id: number) {
    return await Favorite.findByPk(id);
  }

  static async updateFavorite(id: number, data: any) {
    const favorite = await Favorite.findByPk(id);
    if (favorite) {
      return await favorite.update(data);
    }
    throw new Error('Favorite not found');
  }

  static async deleteFavorite(id: number) {
    const favorite = await Favorite.findByPk(id);
    if (favorite) {
      await favorite.destroy();
    } else {
      throw new Error('Favorite not found');
    }
  }
}
