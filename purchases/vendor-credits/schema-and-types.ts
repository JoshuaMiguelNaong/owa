// Vendor Credit Item (line item in the table)
export interface VendorCreditItem {
  id: string; 
  itemName: string;
  account: string;
  quantity: number;
  rate: number;
  tax: number;
  amount: number; 
}

// Main Vendor Credit type
export interface VendorCredit {
  id: string; 
  vendorName: string;
  creditNoteNumber: string;
  orderNumber?: string;
  vendorCreditDate: string; 
  subject?: string;

  items: VendorCreditItem[];

  subTotal: number;
  discount: {
    percent: number;
    amount: number;
  };
  adjustment: number;
  total: number;

  notes?: string;
  attachments?: string[]; 
}
