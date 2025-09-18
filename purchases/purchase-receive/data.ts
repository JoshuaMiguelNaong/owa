import { PurchaseReceiveFormData } from "./schema-and-types";

export const purchaseReceives: PurchaseReceiveFormData[] = [
  {
    id: "1",
    purchaseOrderId: "1",
    purchaseReceiveNumber: "PR-00001",
    referenceNumber: "REF-0816-ABC",
    vendorName: "ABC Supplies Co.",
    deliveryAddress: "1234 Makati Ave, Makati City",
    receiveDate: "2025-08-16",

    items: [
      {
        itemDetails: "Office Chairs",
        orderedQty: 10,
        receivedQty: 6,
        balanceQty: 4,
        rate: 2500,
        tax: "12% VAT",
        amount: 15000,
      },
      {
        itemDetails: "Office Desks",
        orderedQty: 5,
        receivedQty: 5,
        balanceQty: 0,
        rate: 5000,
        tax: "12% VAT",
        amount: 25000,
      },
    ],

    total: 40000,
    notes: "Partial delivery received for chairs. Desks fully delivered.",
    attachments: ["delivery-receipt-0816.pdf"] as unknown as File[],
  },
  {
    id: "2",
    purchaseOrderId: "1",
    purchaseReceiveNumber: "PR-00002",
    referenceNumber: "REF-0818-ABC",
    vendorName: "ABC Supplies Co.",
    deliveryAddress: "1234 Makati Ave, Makati City",
    receiveDate: "2025-08-18",

    items: [
      {
        itemDetails: "Office Chairs",
        orderedQty: 10,
        receivedQty: 4,
        balanceQty: 0,
        rate: 2500,
        tax: "12% VAT",
        amount: 10000,
      },
    ],

    total: 10000,
    notes: "Final batch of chairs received. PO fully completed.",
    attachments: ["delivery-receipt-0818.pdf"] as unknown as File[],
  },
  {
    id: "3",
    purchaseOrderId: "2", // links to PO-00002 (TechWorld PH)
    purchaseReceiveNumber: "PR-00003",
    referenceNumber: "REF-0821-TW",
    vendorName: "TechWorld PH",
    deliveryAddress: "Unit 501, IT Center, Ortigas, Pasig City",
    receiveDate: "2025-08-21",

    items: [
      {
        itemDetails: "Laptop - Dell XPS 15",
        orderedQty: 3,
        receivedQty: 3,
        balanceQty: 0,
        rate: 85000,
        tax: "12% VAT",
        amount: 255000,
      },
      {
        itemDetails: "Wireless Mouse",
        orderedQty: 3,
        receivedQty: 3,
        balanceQty: 0,
        rate: 1500,
        tax: "12% VAT",
        amount: 4500,
      },
    ],

    total: 259500,
    notes: "All items delivered in one batch. Complete.",
    attachments: ["delivery-note-techworld.pdf"] as unknown as File[],
  },
  {
    id: "4",
    purchaseOrderId: "3", // links to PO-00003 (Green Office Supplies)
    purchaseReceiveNumber: "PR-00004",
    referenceNumber: "REF-0819-GOS",
    vendorName: "Green Office Supplies",
    deliveryAddress: "Warehouse 7, EcoZone, Laguna",
    receiveDate: "2025-08-19",

    items: [
      {
        itemDetails: "Recycled Paper (A4, 80gsm)",
        orderedQty: 50,
        receivedQty: 30,
        balanceQty: 20,
        rate: 200,
        tax: "0% VAT",
        amount: 6000,
      },
      {
        itemDetails: "Eco-Friendly Ink Cartridges",
        orderedQty: 10,
        receivedQty: 5,
        balanceQty: 5,
        rate: 1200,
        tax: "0% VAT",
        amount: 6000,
      },
    ],

    total: 12000,
    notes: "Partial delivery due to stock availability.",
    attachments: ["partial-delivery-eco.pdf"] as unknown as File[],
  },
];
