"use client";

import { useEffect, useState } from "react";
import { PaymentMade } from "../../schema-and-types";
import { getPaymentsById } from "../../server-actions";
import jsPDF from "jspdf";

export default function PaymentMadeDownloadPDF({ id }: { id: string }) {
  const [payment, setPayment] = useState<PaymentMade | null>(null);

  useEffect(() => {
    async function fetchPayment() {
      const data = await getPaymentsById(id);
      setPayment(data ?? null);
    }
    fetchPayment();
  }, [id]);

  const handleDownload = () => {
    if (!payment) return;

    const doc = new jsPDF({ unit: "pt" });
    const margin = 40;
    let y = margin;

    // Header
    doc.setFontSize(18);
    doc.text(`Payment #${payment.id}`, margin, y);
    y += 30;

    doc.setFontSize(12);
    doc.text(`Vendor: ${payment.vendorName}`, margin, y);
    y += 18;
    doc.text(
      `Payment Date: ${new Date(payment.paymentDate).toLocaleDateString()}`,
      margin,
      y
    );
    y += 18;
    doc.text(`Payment Method: ${payment.paymentMethod}`, margin, y);
    y += 18;
    if (payment.referenceNumber) {
      doc.text(`Reference #: ${payment.referenceNumber}`, margin, y);
      y += 18;
    }

    // Line separator
    y += 10;
    doc.line(margin, y, 550, y);
    y += 20;

    // Table header for applied bills
    doc.setFont("helvetica", "bold");
    doc.text("Applied Bills", margin, y);
    y += 15;

    const tableColWidths = [200, 120, 120]; // Bill ID | Amount Paid | Payment Date
    const tableStartX = margin;

    doc.setFont("helvetica", "bold");
    doc.text("Bill ID", tableStartX, y);
    doc.text("Amount Paid", tableStartX + tableColWidths[0], y);
    doc.text(
      "Payment Date",
      tableStartX + tableColWidths[0] + tableColWidths[1],
      y
    );
    y += 10;

    // Draw line below header
    doc.line(
      tableStartX,
      y,
      tableStartX + tableColWidths.reduce((a, b) => a + b, 0),
      y
    );
    y += 10;

    // Table rows
    doc.setFont("helvetica", "normal");
    payment.bills.forEach((bill) => {
      doc.text(bill.billId, tableStartX, y);
      doc.text(
        `₱${bill.amountPaid.toFixed(2)}`,
        tableStartX + tableColWidths[0],
        y
      );
      doc.text(
        bill.paymentDate
          ? new Date(bill.paymentDate).toLocaleDateString()
          : "-",
        tableStartX + tableColWidths[0] + tableColWidths[1],
        y
      );
      y += 18;
    });

    y += 10;
    doc.line(
      tableStartX,
      y,
      tableStartX + tableColWidths.reduce((a, b) => a + b, 0),
      y
    );
    y += 20;

    // Totals
    doc.setFont("helvetica", "bold");
    doc.text(`Total Paid: ₱${payment.totalPaid.toFixed(2)}`, margin, y);
    y += 18;

    if (payment.bankCharges) {
      doc.text(`Bank Charges: ₱${payment.bankCharges.toFixed(2)}`, margin, y);
      y += 18;
    }

    if (payment.amountRefunded) {
      doc.text(
        `Amount Refunded: ₱${payment.amountRefunded.toFixed(2)}`,
        margin,
        y
      );
      y += 18;
    }

    if (payment.excessAmount) {
      doc.text(`Excess Amount: ₱${payment.excessAmount.toFixed(2)}`, margin, y);
      y += 18;
    }

    doc.save(`Payment-${payment.id}.pdf`);
  };

  if (!payment) {
    return <p className="text-muted">Loading payment...</p>;
  }

  return (
    <div>
      {/* Preview */}
      <div className="card mb-3">
        <div className="card-header">Payment Preview</div>
        <div className="card-body">
          <h5>Payment #{payment.id}</h5>
          <p>
            <strong>Vendor:</strong> {payment.vendorName}
          </p>
          <p>
            <strong>Payment Date:</strong>{" "}
            {new Date(payment.paymentDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Payment Method:</strong> {payment.paymentMethod}
          </p>
          {payment.referenceNumber && (
            <p>
              <strong>Reference #:</strong> {payment.referenceNumber}
            </p>
          )}

          <h6>Applied Bills</h6>
          {payment.bills.length > 0 ? (
            <ul>
              {payment.bills.map((bill, idx) => (
                <li key={idx}>
                  {bill.billId} — Amount Paid: {bill.amountPaid.toFixed(2)}
                </li>
              ))}
            </ul>
          ) : (
            <p>No bills applied.</p>
          )}

          <p>
            <strong>Total Paid:</strong> {payment.totalPaid.toFixed(2)}
          </p>
          {payment.bankCharges && (
            <p>
              <strong>Bank Charges:</strong> {payment.bankCharges.toFixed(2)}
            </p>
          )}
          {payment.amountRefunded && (
            <p>
              <strong>Amount Refunded:</strong>{" "}
              {payment.amountRefunded.toFixed(2)}
            </p>
          )}
          {payment.excessAmount && (
            <p>
              <strong>Excess Amount:</strong> {payment.excessAmount.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      {/* Download Button */}
      <button className="btn btn-primary" onClick={handleDownload}>
        Download PDF
      </button>
    </div>
  );
}
