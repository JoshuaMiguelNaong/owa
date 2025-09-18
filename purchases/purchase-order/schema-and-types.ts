export interface PurchaseOrderItem {
  itemDetails: string;
  account: string;
  quantity: number;
  rate: number;
  tax: string;
  amount: number;
}

export interface PurchaseOrderFormData {
  id: string;
  vendorName: string;
  deliveryAddress: string;
  organization: string;
  customer: string;
  country: string;

  // Purchase Order Info
  purchaseOrderNumber: string;
  referenceNumber?: string;
  date: string;
  deliveryDate?: string;
  paymentTerms?: string;
  shipmentPreference?: string;

  // Item Table
  items: PurchaseOrderItem[];

  // Additional Information
  customerNotes?: string;
  termsAndConditions?: string;

  // Summary
  subTotal: number;
  discountPercent: number;
  discountAmount: number;
  adjustment: number;
  total: number;

  attachments: File[];
}
