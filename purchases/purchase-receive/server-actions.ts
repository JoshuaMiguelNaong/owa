"use server";

import { PurchaseReceiveFormData } from "./schema-and-types";
import { purchaseReceives } from "./data";

export const getPurchaseReceive = async (): Promise<
  PurchaseReceiveFormData[]
> => {
  const recieve = purchaseReceives as PurchaseReceiveFormData[];
  return recieve;
};

export const getPurchaseReceiveById = async (
  id: string
): Promise<PurchaseReceiveFormData | undefined> => {
  const recieve = purchaseReceives.find((i) => i.id == id);
  return recieve;
};
