"use server";

import { purchaseOrders } from "./data";
import { PurchaseOrderFormData } from "./schema-and-types";

export const getPurchaseOrders = async (): Promise<PurchaseOrderFormData[]> => {
  const list = purchaseOrders as PurchaseOrderFormData[];
  return list;
};

export const getPurchaseOrderById = async (id: string): Promise<PurchaseOrderFormData | undefined> => {
  const record = purchaseOrders.find((i) => i.id == id);
  return record;
};


