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
            const {bookingID, jeepCode, driverCode} = req.body;

            session = await mongoose.startSession();
            session.startTransaction();
            const bookedPackage = await bookingPackage.findOne({
                bookingID: bookingID,
            });
            let vehicleFilter = await Vehicle.find();
            let driverFilter = await Driver.find();

            const updatePromises: Promise<any>[] = [];

            vehicleFilter.forEach((option) => {
                if (option.vehicleID === jeepCode) {
                    updatePromises.push(
                        Vehicle.findOneAndUpdate(
                            {vehicleID: option.vehicleID},
                            {jeepAvailability: "Unavailable"}
                        )
                    );
                }
            });

            driverFilter.forEach((option) => {
                if (option.driverID === driverCode) {
                    updatePromises.push(
                        Driver.findOneAndUpdate(
                            {driverID: option.driverID},
                            {availability: "Unavailable"}
                        )
                    );
                }
            });

            await Promise.all(updatePromises);


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

            const { id, jeepCode, driverCode } = req.params;

            let vehicleFilter = await Vehicle.find();
            let driverFilter = await Driver.find();

            const updatePromises: Promise<any>[] = [];

            vehicleFilter.forEach((option) => {
                if (option.vehicleID === jeepCode) {
                    updatePromises.push(
                        Vehicle.findOneAndUpdate(
                            { vehicleID: option.vehicleID },
                            { jeepAvailability: "Available" },
                            { session }
                        ).exec()
                    );
                }
            });

            driverFilter.forEach((option) => {
                if (option.driverID === driverCode) {
                    updatePromises.push(
                        Driver.findOneAndUpdate(
                            { driverID: option.driverID },
                            { availability: "Available" },
                            { session }
                        ).exec()
                    );
                }
            });

            let deleteBooking = await bookingPackage
                .findByIdAndDelete(id)
                .session(session)
                .exec();

            await Promise.all(updatePromises);

            if (!deleteBooking) {
                throw new Error("Failed to delete post.");
            }

            await session.commitTransaction();
            await session.endSession();

            return res
                .status(200)
                .json({ message: "Booking deleted.", responseData: deleteBooking });
        } catch (error: unknown) {
            if (session) {
                await session.abortTransaction();
                await session.endSession();
            }

            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            } else {
                return res.status(500).json({ message: "Unknown error occurred." });
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
