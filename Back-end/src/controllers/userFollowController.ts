import { Request, Response } from 'express';
import { UserFollowService } from '../services/userFollowService';

export class UserFollowController {
  static async createUserFollow(req: Request, res: Response) {
    try {
      const userFollow = await UserFollowService.createUserFollow(req.body);
      res.status(201).json(userFollow);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllUserFollows(req: Request, res: Response) {
    try {
      const userFollows = await UserFollowService.getAllUserFollows();
      res.status(200).json(userFollows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getUserFollowById(req: Request, res: Response) {
    try {
      const userFollow = await UserFollowService.getUserFollowById(parseInt(req.params.id));
      if (userFollow) {
        res.status(200).json(userFollow);
      } else {
        res.status(404).json({ message: 'User follow not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateUserFollow(req: Request, res: Response) {
    try {
      const userFollow = await UserFollowService.updateUserFollow(parseInt(req.params.id), req.body);
      res.status(200).json(userFollow);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteUserFollow(req: Request, res: Response) {
    try {
      await UserFollowService.deleteUserFollow(parseInt(req.params.id));
      res.status(204).json({ message: 'User follow deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
