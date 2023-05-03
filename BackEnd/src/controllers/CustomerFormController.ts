import {Request, RequestHandler, Response} from "express";

export default class CustomerFormController {
    createCustomer: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
    try{
        const {customerName} = req.body;
        let customer = await Category.findOne({customerName: categoryName});

    }catch (e:unknown){
        if (e instanceof Error) {
            return res.status(500).json({message: e.message});
        } else {
            return res.status(500).json({message: "unknown error occurred!"});
        }
    }
    }
}