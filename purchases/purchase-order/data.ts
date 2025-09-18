import { PurchaseOrderFormData } from "./schema-and-types";

export const purchaseOrders: PurchaseOrderFormData[] = [
  {
    id: "1",
    vendorName: "ABC Supplies Co.",
    deliveryAddress: "1234 Makati Ave, Makati City",
    organization: "FEU Tech Purchasing",
    customer: "Joshua Miguel Naong",
    country: "Philippines",

    purchaseOrderNumber: "PO-00001",
    referenceNumber: "REF-2025-0810-A",
    date: "2025-08-10",
    deliveryDate: "2025-08-15",
    paymentTerms: "Net 30",
    shipmentPreference: "Standard Delivery",

    items: [
      {
        itemDetails: "Office Chairs",
        account: "Furniture",
        quantity: 10,
        rate: 2500,
        tax: "12% VAT",
        amount: 25000,
      },
      {
        itemDetails: "Office Desks",
        account: "Furniture",
        quantity: 5,
        rate: 5000,
        tax: "12% VAT",
        amount: 25000,
      },
    ],

    customerNotes: "Deliver during office hours only.",
    termsAndConditions: "Payment due within 30 days.",

    subTotal: 50000,
    discountPercent: 5,
    discountAmount: 2500,
    adjustment: 0,
    total: 47500,

    attachments: ["po-00001.pdf", "vendor-quote.pdf"] as unknown as File[],
  },
  {
    id: "0002",
    vendorName: "TechWorld PH",
    deliveryAddress: "Unit 501, IT Center, Ortigas, Pasig City",
    organization: "FEU Tech Purchasing",
    customer: "Joshua Miguel Naong",
    country: "Philippines",

    purchaseOrderNumber: "PO-00002",
    referenceNumber: "REF-2025-0811-B",
    date: "2025-08-11",
    deliveryDate: "2025-08-20",
    paymentTerms: "Net 15",
    shipmentPreference: "Express Courier",

    items: [
      {
        itemDetails: "Laptop - Dell XPS 15",
        account: "IT Equipment",
        quantity: 3,
        rate: 85000,
        tax: "12% VAT",
        amount: 255000,
      },
      {
        itemDetails: "Wireless Mouse",
        account: "IT Accessories",
        quantity: 3,
        rate: 1500,
        tax: "12% VAT",
        amount: 4500,
      },
    ],

    customerNotes: "Include warranty cards in the delivery.",
    termsAndConditions: "Goods subject to inspection upon delivery.",

    subTotal: 259500,
    discountPercent: 0,
    discountAmount: 0,
    adjustment: -500,
    total: 259000,

    attachments: ["po-00002.pdf", "warranty-info.pdf"] as unknown as File[],
  },
  {
    id: "0003",
    vendorName: "Green Office Supplies",
    deliveryAddress: "Warehouse 7, EcoZone, Laguna",
    organization: "FEU Tech Purchasing",
    customer: "Joshua Miguel Naong",
    country: "Philippines",

    purchaseOrderNumber: "PO-00003",
    referenceNumber: "REF-2025-0812-C",
    date: "2025-08-12",
    deliveryDate: "2025-08-18",
    paymentTerms: "Cash on Delivery",
    shipmentPreference: "Eco-Friendly Delivery",

    items: [
      {
        itemDetails: "Recycled Paper (A4, 80gsm)",
        account: "Office Supplies",
        quantity: 50,
        rate: 200,
        tax: "0% VAT",
        amount: 10000,
      },
      {
        itemDetails: "Eco-Friendly Ink Cartridges",
        account: "Office Supplies",
        quantity: 10,
        rate: 1200,
        tax: "0% VAT",
        amount: 12000,
      },
    ],

    customerNotes: "Pack items in recyclable materials.",
    termsAndConditions: "Full payment upon delivery.",

    subTotal: 22000,
    discountPercent: 10,
    discountAmount: 2200,
    adjustment: 0,
    total: 19800,

    attachments: ["po-00003.pdf", "eco-certification.pdf"] as unknown as File[],
  },
];
