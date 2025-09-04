import type { Request, Response } from "express";

class UserController {
	getUserState = (_: Request, res: Response) => {
		//TODO: Add validations for phoneNumbers that is in the database
		res.status(200).json({
			state: "Not-Busy",
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
