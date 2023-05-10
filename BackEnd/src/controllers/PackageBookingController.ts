import {Request, RequestHandler, Response} from "express";
import {Driver} from "../models/Driver";
import {bookingPackage} from "../models/PackageBooking";

export default class PackageBookingController {
    createPlaceBooking: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {packageID} = req.body;
            console.log(req.body);
            let bookedPackage = await bookingPackage.findOne({packageID:packageID});
            if (!bookedPackage) {
                let bookedPackage = new bookingPackage(req.body);
                let bookedPackage01 = await bookedPackage.save();
                return res.json({message: "Booking Placed.!", responseData: bookedPackage01});
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


    // getAllDrivers: RequestHandler = async (
    //     req: Request,
    //     res: Response
    // ): Promise<Response> => {
    //     try {
    //         let driver = await Driver.find();
    //         return res.status(200).json({responseData: driver});
    //     } catch (error: unknown) {
    //         if (error instanceof Error) {
    //             return res.status(500).json({message: error.message});
    //         } else {
    //             return res.status(500).json({message: "Unknown error occurred."});
    //         }
    //     }
    // };
    //
    // updateDriver: RequestHandler = async (
    //     req: Request,
    //     res: Response
    // ): Promise<Response> => {
    //     try {
    //         const {id} = req.params;
    //         let updateDriver = await Driver.findByIdAndUpdate(id, req.body, {
    //             new: true,
    //         });
    //         return res
    //             .status(200)
    //             .json({message: "Driver updated.", responseData: updateDriver});
    //     } catch (error: unknown) {
    //         if (error instanceof Error) {
    //             return res.status(500).json({message: error.message});
    //         } else {
    //             return res.status(500).json({message: "Unknown error occurred."});
    //         }
    //     }
    // };
    //
    // deleteDriver = async (req: Request, res: Response): Promise<Response> => {
    //     try {
    //         const {id} = req.params;
    //         let deleteDriver = await Driver.findByIdAndDelete(id);
    //         if (!deleteDriver) {
    //             new Error("Failed to delete post.");
    //         }
    //         return res
    //             .status(200)
    //             .json({message: "Delete deleted.", responseData: deleteDriver});
    //     } catch (error: unknown) {
    //         if (error instanceof Error) {
    //             return res.status(500).json({message: error.message});
    //         } else {
    //             return res.status(500).json({message: "Unknown error occurred."});
    //         }
    //     }
    // };
}