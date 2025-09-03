import type { Request, Response } from "express";

class UserController {
	getUserState = (req: Request, res: Response) => {
		//TODO: Add validations for phoneNumbers that is in the database
		res.status(200).json({
			test: req.params.phoneNumber,
		});
	};
	sendMessageToUser = (req: Request, res: Response) => {
		//TODO: Add validations for phoneNumber that is in the database
		res.status(200).json({
			test: req.params.phoneNumber,
		});
	};
}
export default UserController;
