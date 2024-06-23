import { Router } from 'express';
import { EventPackageController } from '../controllers/eventPackageController';

const router = Router();

router.post('/', EventPackageController.createEventPackage);
router.get('/', EventPackageController.getAllEventPackages);
router.get('/:id', EventPackageController.getEventPackageById);
router.put('/:id', EventPackageController.updateEventPackage);
router.delete('/:id', EventPackageController.deleteEventPackage);

export default router;
