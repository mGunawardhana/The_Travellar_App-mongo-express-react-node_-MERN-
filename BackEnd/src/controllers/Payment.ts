import {Request, RequestHandler, Response} from "express";
import {Driver} from "../models/Driver";

export default class PaymentController{
    createPayment: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {driverID} = req.body;
            console.log(req.body);
            let driver = await Driver.findOne({driverID: driverID});
            if (!driver) {
                let driver = new Driver(req.body);
                let driver01 = await driver.save();
                return res.json({message: "New Payment added.!", responseData: driver01});
            } else {
                return res.status(200).json({message: "Already exists."});
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message})
            } else {
                return res.status(500).json({message: "Unknown error occurred!"})
            }
        }
    };
}