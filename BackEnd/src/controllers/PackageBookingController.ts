import {Request, RequestHandler, Response} from "express";
import {bookingPackage} from "../models/PackageBooking";
import mongoose, {ClientSession} from "mongoose";
import {Driver} from "../models/Driver";

export default class PackageBookingController {
    createPlaceBooking: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {

        let session: ClientSession | null = null;
        try {
            const {packageID} = req.body;

            session = await mongoose.startSession();
            session.startTransaction();

            let jeep =await Driver.findOne(

            );

            let bookedPackage = await bookingPackage.findOne({packageID: packageID});
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


    getAllPlaceBookings: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            let bookings = await bookingPackage.find();
            return res.status(200).json({responseData: bookings});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };
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