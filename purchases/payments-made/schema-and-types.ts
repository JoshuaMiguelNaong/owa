export interface PaymentBillItem {
  billId: string;
  amountPaid: number;
  paymentDate?: string; 
}

export interface PaymentMade {
  id: string;
  vendorId: number;
  vendorName: string;
  paymentDate: string;
  paymentMethod: string; 
  referenceNumber?: string;
  bankCharges?: number;
  tdsDeducted?: number;
  notes?: string;
  bills: PaymentBillItem[];
  totalPaid: number;
  amountRefunded?: number;
  excessAmount?: number;
  attachments?: string[];
}
