import {Request, RequestHandler, Response} from "express";
import {Driver} from "../models/Driver";
import {Payment} from "../models/Payments";

export default class PaymentController{
    createPayment: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {bookingID} = req.body;
            console.log(req.body);
            let payment = await Payment.findOne({bookingID:bookingID});
            if (!payment) {
                let payment = new Payment(req.body);
                let paymentNew = await payment.save();
                return res.json({message: "New Payment added.!", responseData: paymentNew});
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