import { FeaturedEvent } from '../models/FeaturedEvent';

export class FeaturedEventService {
  static async createFeaturedEvent(data: any) {
    return await FeaturedEvent.create(data);
  }

  static async getAllFeaturedEvents() {
    return await FeaturedEvent.findAll();
  }

  static async getFeaturedEventById(id: number) {
    return await FeaturedEvent.findByPk(id);
  }

  static async updateFeaturedEvent(id: number, data: any) {
    const featuredEvent = await FeaturedEvent.findByPk(id);
    if (featuredEvent) {
      return await featuredEvent.update(data);
    }
    throw new Error('Featured event not found');
  }

  static async deleteFeaturedEvent(id: number) {
    const featuredEvent = await FeaturedEvent.findByPk(id);
    if (featuredEvent) {
      await featuredEvent.destroy();
    } else {
      throw new Error('Featured event not found');
    }
  }
}
