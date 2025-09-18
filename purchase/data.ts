// src/data/purchaseReceives.ts

import { PurchaseReceive } from "./schema-and-types";
import { Bills } from "./schema-and-types";

//purchase recieves table
export const purchaseReceives: PurchaseReceive[] = [
  {
    id: "1",
    vendorName: "ABC Corporation",
    status: "RECEIVED",
    billed: true,
    quantity: 10,
  },
  {
    id: "2",
    vendorName: "XYZ Enterprises",
    status: "PENDING",
    billed: false,
    quantity: 5,
  },
  {
    id: "3",
    vendorName: "Owa Incorporation",
    status: "PENDING",
    billed: false,
    quantity: 9,
  },
];

export const unpaidBills: Bills[] = [
  {
    id: "1",
    billNumber: "BILL-001",
    vendorName: "Vendor A",
    billDate: "06 Aug 2025",
    dueDate: "13 Aug 2025",
    amount: "5000.00",
  },
  {
    id: "2",
    billNumber: "BILL-002",
    vendorName: "Vendor B",
    billDate: "01 Aug 2025",
    dueDate: "10 Aug 2025",
    amount: "7500.00",
  },
  {
    id: "3",
    billNumber: "BILL-003",
    vendorName: "Vendor Owa",
    billDate: "01 Oct 2025",
    dueDate: "11 Oct 2025",
    amount: "9500.00",
  },
  {
    id: "4",
    billNumber: "BILL-004",
    vendorName: "DakDak Store",
    billDate: "029 Oct 2025",
    dueDate: "11 Nov 2025",
    amount: "6750.00",
  },
];
