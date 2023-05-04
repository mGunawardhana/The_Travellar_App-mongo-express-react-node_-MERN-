import {Request, RequestHandler, Response} from "express";
import {Package} from "../models/Package";


export default class PackageController {

    /** SAVE PACKAGE */
    createCustomer: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {packageID} = req.body;
            console.log(req.body);
            let packageOne = await Package.findOne({packageID: packageID});
            if (!packageOne) {
                let packageOne = new Package(req.body);
                let package_One = await packageOne.save();
                return res.json({message: "New customer added.!", responseData: package_One});
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