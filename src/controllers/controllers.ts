import type { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  private userService;
  constructor() {
    this.userService = new UserService();
  }

  getUserState = async (req: Request, res: Response) => {
    //TODO: Add validations for phoneNumbers that is in the database
    const retunedState = await this.userService.getUserState(req.params.phoneNumber as string);
    return res.status(200).json(
      retunedState
    );
  };
  sendMessageToUser = async (req: Request, res: Response) => {
    //TODO: Add validations for phoneNumber that is in the database
    res.status(200).json({
      test: req.params.phoneNumber,
    });
  };
}
export default UserController;
