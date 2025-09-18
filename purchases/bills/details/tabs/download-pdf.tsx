"use client";

import { useEffect, useState } from "react";
import { Bill } from "../../schema-and-types";
import { getBillsById } from "../../server-actions";
import jsPDF from "jspdf";

export default function BillDownloadPDF({ id }: { id: string }) {
  const [bill, setBill] = useState<Bill | null>(null);

  useEffect(() => {
    async function fetchBill() {
      const data = await getBillsById(id);
      setBill(data ?? null);
    }
    fetchBill();
  }, [id]);

  const handleDownload = () => {
    if (!bill) return;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Bill #${bill.billNumber}`, 20, 20);
    doc.setFontSize(12);
    doc.text(`Vendor: ${bill.vendorName}`, 20, 30);
    doc.text(`Bill Date: ${bill.billDate}`, 20, 40);
    doc.text(`Due Date: ${bill.dueDate}`, 20, 50);

    let y = 60;
    doc.text("Items:", 20, y);
    bill.items.forEach((item) => {
      y += 10;
      doc.text(
        `${item.itemName} — ${item.quantity} × ${item.rate.toFixed(
          2
        )} = ${item.amount.toFixed(2)}`,
        25,
        y
      );
    });

    y += 10;
    doc.text(`Subtotal: ${bill.subTotal.toFixed(2)}`, 20, y);
    y += 10;
    doc.text(`Adjustment: ${bill.adjustment.toFixed(2)}`, 20, y);
    y += 10;
    doc.text(`Total: ${bill.total.toFixed(2)}`, 20, y);

    doc.save(`Bill-${bill.billNumber}.pdf`);
  };

  if (!bill) {
    return <p className="text-muted">Loading bill...</p>;
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleDownload}>
        Download PDF
      </button>
    </div>
  );
}
