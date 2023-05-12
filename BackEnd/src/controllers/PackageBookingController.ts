import {Request, RequestHandler, Response} from "express";
import {bookingPackage} from "../models/PackageBooking";
import {Vehicle} from "../models/Vehicle";
import mongoose, {ClientSession} from "mongoose";
import {Driver} from "../models/Driver";

export default class PackageBookingController {
    createPlaceBooking: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        let session: ClientSession | null = null;

        try {
            const {bookingID, jeepCode,driverCode} = req.body;

            session = await mongoose.startSession();
            session.startTransaction();
            const bookedPackage = await bookingPackage.findOne({
                bookingID: bookingID,
            });
            let vehicleFilter = await Vehicle.find();
            let driverFilter = await Driver.find();

            await Promise.all(
                vehicleFilter.map(async (option) => {
                    if (option.vehicleID === jeepCode) {
                        console.log(option.vehicleID === jeepCode);
                        await Vehicle.findOneAndUpdate(
                            {vehicleID: option.vehicleID},
                            {jeepAvailability: "Unavailable"}
                        );
                    }
                })
            );

            console.log(req.body);

            driverFilter.map(async(option)=>{
                if (option.driverID === driverCode){
                    await
                }
            })
            //


            let bookedPackage01;
            if (!bookedPackage) {
                const newBookedPackage = new bookingPackage(req.body);
                bookedPackage01 = await newBookedPackage.save();
            } else {
                return res.status(200).json({message: "Booking already exists."});
            }

            await session.commitTransaction();
            await session.endSession();
            return res.json({
                message: "Booking Placed.!",
                responseData: bookedPackage01,
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred!"});
            }
        }
    };

    deletePlaceBooking = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        let session: ClientSession | null = null;

        try {
            session = await mongoose.startSession();
            session.startTransaction();

            const {id, jeepCode} = req.params;
            let deleteBooking = await bookingPackage.findByIdAndDelete(id);
            let vehicleFilter = await Vehicle.find();

            await Promise.all(
                vehicleFilter.map(async (option) => {
                    if (option.vehicleID === jeepCode) {
                        console.log(option.vehicleID === jeepCode);
                        await Vehicle.findOneAndUpdate(
                            {vehicleID: option.vehicleID},
                            {jeepAvailability: "Available"}
                        );
                    }

                    console.log(option.vehicleID + " " + jeepCode);
                })
            );

            if (!deleteBooking) {
                new Error("Failed to delete post.");
            }

            await session.commitTransaction();
            await session.endSession();

            return res
                .status(200)
                .json({message: "Delete deleted.", responseData: deleteBooking});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };

    getAllPlaceBookings: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            let bookings = await bookingPackage.find();
            console.log(bookings);
            return res.status(200).json({responseData: bookings});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };


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
}
