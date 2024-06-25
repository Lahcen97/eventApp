import { Router } from 'express';
import { UserFollowController } from '../controllers/userFollowController';

const router = Router();

router.post('/', UserFollowController.createUserFollow);
router.get('/', UserFollowController.getAllUserFollows);
router.get('/:id', UserFollowController.getUserFollowById);
router.put('/:id', UserFollowController.updateUserFollow);
router.delete('/:id', UserFollowController.deleteUserFollow);

export default router;
