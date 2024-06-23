import { Router } from 'express';
import { PackageItemController } from '../controllers/packageItemController';

const router = Router();

router.post('/', PackageItemController.createPackageItem);
router.get('/', PackageItemController.getAllPackageItems);
router.get('/:id', PackageItemController.getPackageItemById);
router.put('/:id', PackageItemController.updatePackageItem);
router.delete('/:id', PackageItemController.deletePackageItem);

export default router;
