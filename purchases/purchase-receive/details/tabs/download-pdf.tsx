"use client";

import { PurchaseReceiveFormData } from "../../schema-and-types";
import jsPDF from "jspdf";
import "jspdf-autotable";

interface PurchaseReceivePdfTabProps {
  purchaseReceive: PurchaseReceiveFormData;
}

export default function PurchaseReceivePdfTab({
  purchaseReceive,
}: PurchaseReceivePdfTabProps) {
  const handleDownloadPdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Purchase Receive", 14, 20);

    doc.setFontSize(12);
    doc.text(`PR Number: ${purchaseReceive.purchaseReceiveNumber}`, 14, 30);
    if (purchaseReceive.referenceNumber) {
      doc.text(`Reference #: ${purchaseReceive.referenceNumber}`, 14, 37);
    }
    doc.text(
      `Date: ${new Date(purchaseReceive.receiveDate).toLocaleDateString()}`,
      14,
      44
    );
    doc.text(`Vendor: ${purchaseReceive.vendorName}`, 14, 51);
    doc.text(`Delivery Address: ${purchaseReceive.deliveryAddress}`, 14, 58);

    // Table of items
    const tableData = purchaseReceive.items.map((item) => [
      item.itemDetails,
      item.orderedQty,
      item.receivedQty,
      item.balanceQty,
      item.rate.toFixed(2),
      item.tax,
      item.amount.toFixed(2),
    ]);

    (doc as any).autoTable({
      head: [
        [
          "Item",
          "Ordered Qty",
          "Received Qty",
          "Balance Qty",
          "Rate",
          "Tax",
          "Amount",
        ],
      ],
      body: tableData,
      startY: 68,
    });

    // Grand total
    const finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.text(`Grand Total: ${purchaseReceive.total.toFixed(2)}`, 14, finalY);

    // Notes
    if (purchaseReceive.notes) {
      doc.text("Notes:", 14, finalY + 10);
      doc.text(purchaseReceive.notes, 14, finalY + 17);
    }

    // Save
    doc.save(`PurchaseReceive_${purchaseReceive.purchaseReceiveNumber}.pdf`);
  };

  return (
    <div className="card custom-card">
      <div className="card-header">
        <div className="card-title">Download PDF</div>
      </div>
      <div className="card-body">
        <p>Generate a PDF copy of this purchase receive for your records.</p>
        <button className="btn btn-primary" onClick={handleDownloadPdf}>
          Download PDF
        </button>
      </div>
    </div>
  );
}
