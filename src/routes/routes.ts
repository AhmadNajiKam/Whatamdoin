import { Router } from "express";
import UserController from "../controllers/controllers";
const router = Router();
const userController = new UserController();
router.get("/:phoneNumber", userController.getUserState);
router.post("/:phoneNumber", userController.sendMessageToUser);
export default router;
