import { VendorCredit } from "./schema-and-types";

export const vendorCredits: VendorCredit[] = [
  {
    id: "VC-00001",
    vendorName: "ABC Supplies Inc.",
    creditNoteNumber: "VC-00001",
    orderNumber: "PO-1001",
    vendorCreditDate: "2025-08-20",
    subject: "Return of damaged goods",

    items: [
      {
        id: "1",
        itemName: "Printer Ink",
        account: "Office Supplies",
        quantity: 2,
        rate: 50,
        tax: 5,
        amount: 105,
      },
      {
        id: "2",
        itemName: "Paper Reams",
        account: "Office Supplies",
        quantity: 5,
        rate: 10,
        tax: 2,
        amount: 52,
      },
    ],

    subTotal: 157,
    discount: {
      percent: 5,
      amount: 7.85,
    },
    adjustment: 0,
    total: 149.15,

    notes: "Credit issued for returned items",
    attachments: ["credit-note-0001.pdf"],
  },
  {
    id: "VC-00002",
    vendorName: "XYZ Trading",
    creditNoteNumber: "VC-00002",
    orderNumber: "PO-1002",
    vendorCreditDate: "2025-08-21",
    subject: "Overbilling adjustment",

    items: [
      {
        id: "1",
        itemName: "Laptop Charger",
        account: "IT Equipment",
        quantity: 1,
        rate: 75,
        tax: 0,
        amount: 75,
      },
    ],

    subTotal: 75,
    discount: {
      percent: 0,
      amount: 0,
    },
    adjustment: -5,
    total: 70,

    notes: "Adjustment for invoice correction",
    attachments: [],
  },
  {
    id: "VC-00003",
    vendorName: "Global Stationery Co.",
    creditNoteNumber: "VC-00003",
    orderNumber: "PO-1005",
    vendorCreditDate: "2025-08-22",
    subject: "Refund for over-delivered items",

    items: [
      {
        id: "1",
        itemName: "Staplers",
        account: "Office Supplies",
        quantity: 10,
        rate: 8,
        tax: 4,
        amount: 84,
      },
      {
        id: "2",
        itemName: "Markers (Pack of 12)",
        account: "Office Supplies",
        quantity: 3,
        rate: 12,
        tax: 3,
        amount: 39,
      },
    ],

    subTotal: 123,
    discount: {
      percent: 10,
      amount: 12.3,
    },
    adjustment: 2,
    total: 112.7,

    notes: "Refund issued for extra stationery delivered",
    attachments: ["credit-note-0003.pdf"],
  },
];
