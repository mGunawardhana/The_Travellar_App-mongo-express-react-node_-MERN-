import {Document, model, Schema} from "mongoose";

export interface IVehicle extends Document {
    vehicleID: string;
    vehicleModel: string;
    passengerCount: number;
    type: string;
    fuelType: string;
    jeepAvailability: string;
}

const VehicleSchema = new Schema(
    {
        vehicleID: {
            type: String,
            required: true,
        },
        vehicleModel: {
            type: String,
            required: true,
        },
        passengerCount: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        fuelType: {
            type: String,
            required: true,
        },
        jeepAvailability: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

export const Vehicle = model<IVehicle>("Vehicle", VehicleSchema);
