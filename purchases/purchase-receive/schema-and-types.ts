export interface PurchaseReceiveFormData {
  id: string;
  purchaseOrderId: string;
  purchaseReceiveNumber: string; 
  referenceNumber?: string; 
  vendorName: string;
  deliveryAddress: string;
  receiveDate: string;

  items: {
    itemDetails: string;
    orderedQty: number;
    receivedQty: number;
    balanceQty: number;
    rate: number;
    tax: string;
    amount: number;
  }[];

  total: number; 
  notes?: string;
  attachments?: File[];
}
