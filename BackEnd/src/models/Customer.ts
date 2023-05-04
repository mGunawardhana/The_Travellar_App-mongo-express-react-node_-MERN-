import {Document, model, Schema} from "mongoose";

export interface ICustomer extends Document {
    customerID: string;
    customerFirstName: string;
    customerLastName: string;
    customerAddress: string;
    customerContact: string;
    customerEmail: string;
}

const CustomerSchema = new Schema(
    {
        customerID: {
            type: String,
            required: true,
        },
        customerFirstName: {
            type: String,
            required: true,
        },
        customerLastName: {
            type: String,
            required: true,
        },
        customerAddress: {
            type: String,
            required: true,
        },
        customerContact: {
            type: String,
            required: true,
        },
        customerEmail: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

export const Customer = model<ICustomer>("Customer", CustomerSchema);
