import { PackageItem } from '../models/PackageItem';

export class PackageItemService {
  static async createPackageItem(data: any) {
    return await PackageItem.create(data);
  }

  static async getAllPackageItems() {
    return await PackageItem.findAll();
  }

  static async getPackageItemById(id: number) {
    return await PackageItem.findByPk(id);
  }

  static async updatePackageItem(id: number, data: any) {
    const packageItem = await PackageItem.findByPk(id);
    if (packageItem) {
      return await packageItem.update(data);
    }
    throw new Error('Package item not found');
  }

  static async deletePackageItem(id: number) {
    const packageItem = await PackageItem.findByPk(id);
    if (packageItem) {
      await packageItem.destroy();
    } else {
      throw new Error('Package item not found');
    }
  }
}
