import { purchaseReceives } from "./data";
import { PurchaseReceive } from "./schema-and-types";

import { Bills } from "./schema-and-types";
import { unpaidBills } from "./data";

//purchase recieves table
export const getPurchaseOrder = async (): Promise<PurchaseReceive[]> => {
  const list = purchaseReceives as PurchaseReceive[];
  return list;
};

//bills
export const getUnpaidBills = async (): Promise<Bills[]> => {
  const bills = unpaidBills as Bills[];
  return bills;
};
