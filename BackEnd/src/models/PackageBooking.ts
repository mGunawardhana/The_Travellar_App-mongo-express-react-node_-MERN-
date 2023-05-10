import { Document, model, Schema } from "mongoose";

export interface IPackageBooking extends Document {
  customerID: string;
  customerFirstName: string;
  customerLastName: string;
  customerAddress: string;
  customerContact: string;
  customerEmail: string;
}

const PackageBooking = new Schema(
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
  { timestamps: true }
);

export const Customer = model<IPackageBooking>("packageBooking", PackageBooking);
