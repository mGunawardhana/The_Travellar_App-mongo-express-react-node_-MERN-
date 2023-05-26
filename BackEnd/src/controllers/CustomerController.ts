import {Request, RequestHandler, Response} from "express";
import {Customer} from "../models/Customer";

export default class CustomerFormController {

    /** SAVE CUSTOMER */
    createCustomer: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {customerID} = req.body;
            // console.log(req.body);
            // let customer = await Customer.findOne({customerID: customerID});
            // if (!customer) {
            //     let customer = new Customer(req.body);
            //     let customerOne = await customer.save();
            //     return res.json({message: "New customer added.!", responseData: customerOne});
            // } else {
            //     return res.status(200).json({message: "Already exists."});
            // }

            let vehicle = new Customer(req.body);
            let savedVehicle = await vehicle.save();
            return res.status(200).json({message: savedVehicle});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message})
            } else {
                return res.status(500).json({message: "Unknown error occurred!"})
            }
        }
    };

    /** GET ALL CUSTOMERS */
    getAllCustomer: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            let customer = await Customer.find();
            return res.status(200).json({responseData: customer});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };

    updateCustomer: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {id} = req.params;
            let updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            return res
                .status(200)
                .json({message: "Customer updated.", responseData: updatedCustomer});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };

    deleteCustomer = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {id} = req.params;
            let deletedCustomer = await Customer.findByIdAndDelete(id);
            if (!deletedCustomer) {
                new Error("Failed to delete post.");
            }
            return res
                .status(200)
                .json({message: "Customer deleted.", responseData: deletedCustomer});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };

}