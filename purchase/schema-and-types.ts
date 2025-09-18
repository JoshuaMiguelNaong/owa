export interface PurchaseReceive {
  id: string;
  vendorName: string;
  status: "RECEIVED" | "PENDING";
  billed: boolean;
  quantity: number;
}

export interface Bills {
  id: string;
  billNumber: string;
  vendorName: string;
  billDate: string;
  dueDate: string;
  amount: string;
}
