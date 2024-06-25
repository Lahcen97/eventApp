import { Router } from 'express';
import { EventDocumentController } from '../controllers/eventDocumentController';

const router = Router();

router.post('/', EventDocumentController.createEventDocument);
router.get('/', EventDocumentController.getAllEventDocuments);
router.get('/:id', EventDocumentController.getEventDocumentById);
router.put('/:id', EventDocumentController.updateEventDocument);
router.delete('/:id', EventDocumentController.deleteEventDocument);

export default router;
