import { Router } from 'express';
import { SubEventController } from '../controllers/subEventController';

const router = Router();

router.post('/', SubEventController.createSubEvent);
router.get('/', SubEventController.getAllSubEvents);
router.get('/:id', SubEventController.getSubEventById);
router.put('/:id', SubEventController.updateSubEvent);
router.delete('/:id', SubEventController.deleteSubEvent);

export default router;
