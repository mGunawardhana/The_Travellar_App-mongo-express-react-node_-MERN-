import {Document, model, Schema} from "mongoose";

export interface IDriver extends Document {
    bookingID: string;
    customerName: string;
    fullAmount: number;
    cash: number;
    balance: number;
}

const DriverSchema = new Schema(
    {
        bookingID: {
            type: String,
            required: true,
        },
        customerName: {
            type: String,
            required: true,
        },
        fullAmount: {
            type: Number,
            required: true,
        },
        cash: {
            type: Number,
            required: true,
        },
        balance: {
            type: Number,
            required: true,
        },
    },
    {timestamps: true}
);

export const Driver = model<IDriver>("Driver",DriverSchema);
