import {Document, model, Schema} from "mongoose";

export interface IDriver extends Document {
    driverID: string;
    driverFirstName: string;
    driverLicense: string;
    driverContact: string;
    driverEmail: string;
    availability: string;

}

const DriverSchema = new Schema(
    {
        driverID: {
            type: String,
            required: true,
        },
        driverFirstName: {
            type: String,
            required: true,
        },
        driverLicense: {
            type: String,
            required: true,
        },
        driverContact: {
            type: String,
            required: true,
        },
        driverEmail: {
            type: String,
            required: true,
        },
        availability: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

export const Driver = model<IDriver>("Driver",DriverSchema);
