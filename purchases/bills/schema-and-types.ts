// Bill Item
export interface BillItem {
  id: string;
  itemName: string;
  account: string;
  quantity: number;
  rate: number;
  discount: number;
  tax: string;
  customer: string;
  amount: number;
}

// Bill Main
export interface Bill {
  id: string;
  vendorId: number;
  vendorName: string;
  billNumber: string;
  referenceNumber?: string;
  orderNumber?: string;
  billDate: string;
  dueDate: string;
  paymentTerms: string;
  subject: string;
  items: BillItem[];
  reportingTags: string[];
  subTotal: number;
  adjustment: number;
  total: number;
  attachments?: string[];
  status: "Draft" | "Open" | "Paid" | "Cancelled";
}
