"use server";

import { VendorCredit } from "./schema-and-types";
import { vendorCredits } from "./data";

export const getVendorCredits = async (): Promise<VendorCredit[]> => {
  const data = vendorCredits as VendorCredit[];
  return data;
};

export const getVendorCreditsById = async (
  id: string
): Promise<VendorCredit | undefined> => {
  const data = vendorCredits.find((i) => i.id == id);
  return data;
};
