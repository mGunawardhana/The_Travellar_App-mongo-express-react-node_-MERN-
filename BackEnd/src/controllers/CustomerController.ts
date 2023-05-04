import {Request, RequestHandler, Response} from "express";
import {Customer} from "../models/Customer";

export default class CustomerFormController {
    createCustomer: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {customerID} = req.body;
            console.log(req.body);
            let customer = await Customer.findOne({customerID: customerID});
            if (!customer) {
                let customer = new Customer(req.body);
                let customerOne = await customer.save();
                return res.json({message: "New customer added.!", responseData: customerOne});
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