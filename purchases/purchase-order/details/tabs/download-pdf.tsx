"use client";

import { PurchaseOrderFormData } from "../../schema-and-types";
import jsPDF from "jspdf";
import "jspdf-autotable";

interface PurchaseOrderPdfTabProps {
  purchaseOrder: PurchaseOrderFormData;
}

export default function PurchaseOrderPdfTab({
  purchaseOrder,
}: PurchaseOrderPdfTabProps) {
  const handleDownloadPdf = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Purchase Order", 14, 20);

    // Basic Info
    doc.setFontSize(12);
    doc.text(`PO Number: ${purchaseOrder.purchaseOrderNumber}`, 14, 30);
    doc.text(
      `Date: ${new Date(purchaseOrder.date).toLocaleDateString()}`,
      14,
      37
    );
    doc.text(`Vendor: ${purchaseOrder.vendorName}`, 14, 44);

    // Table of items
    const tableData = purchaseOrder.items.map((item) => [
      item.itemDetails,
      item.quantity,
      item.rate.toFixed(2),
      (item.quantity * item.rate).toFixed(2),
    ]);

    (doc as any).autoTable({
      head: [["Item", "Quantity", "Rate", "Total"]],
      body: tableData,
      startY: 52,
    });

    // Grand total
    const finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.text(`Grand Total: ${purchaseOrder.total.toFixed(2)}`, 14, finalY);

    // Save
    doc.save(`PurchaseOrder_${purchaseOrder.purchaseOrderNumber}.pdf`);
  };

  return (
    <div className="card custom-card">
      <div className="card-header">
        <div className="card-title">Download PDF</div>
      </div>
      <div className="card-body">
        <p>Generate a PDF copy of this purchase order for your records.</p>
        <button className="btn btn-primary" onClick={handleDownloadPdf}>
          Download PDF
        </button>
      </div>
    </div>
  );
}
