import { Document, model, Schema } from "mongoose";

export interface IPackage extends Document {
  packageID?: string;
  packageName: string;
  daysHrsCount: string;
  description: string;
  offers: number;
  packageAmount: number;
  packageImage: string;
}

const PackageSchema = new Schema(
  {
    packageID: {
      type: String,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    daysHrsCount: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    offers: {
      type: Number,
      required: true,
    },
    packageAmount: {
      type: Number,
      required: true,
    },
    packageImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Package = model<IPackage>("Package", PackageSchema);
