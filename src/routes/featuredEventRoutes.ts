import { Router } from 'express';
import { FeaturedEventController } from '../controllers/featuredEventController';

const router = Router();

router.post('/', FeaturedEventController.createFeaturedEvent);
router.get('/', FeaturedEventController.getAllFeaturedEvents);
router.get('/:id', FeaturedEventController.getFeaturedEventById);
router.put('/:id', FeaturedEventController.updateFeaturedEvent);
router.delete('/:id', FeaturedEventController.deleteFeaturedEvent);

export default router;
