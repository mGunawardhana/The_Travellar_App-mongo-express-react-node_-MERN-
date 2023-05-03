import {Request, RequestHandler, Response} from "express";
import {Customer} from "../models/Customer";

export default class CustomerFormController {
    createCustomer: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {customerName} = req.body;
            let customer = await Customer.findOne({customerName: customerName});

            if (!customer) {
                customer = new Customer({customerName: customerName});
                customer = await customer.save();
                return res
                    .status(200)
                    .json({message: "New Customer added!", responseDate: customer});
            } else {
                return res.status(500).json({message: "Already exists !"});
            }
        } catch (e: unknown) {
            if (e instanceof Error) {
                return res.status(500).json({message: e.message});
            } else {
                return res.status(500).json({message: "unknown error occurred!"});
            }
        }
    };
}