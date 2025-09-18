"use client";

import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import { VendorCredit } from "../../schema-and-types";
import { getVendorCreditsById } from "../../server-actions";

export default function VendorCreditDownloadPDF({ id }: { id: string }) {
  const [vendorCredit, setVendorCredit] = useState<VendorCredit | null>(null);

  useEffect(() => {
    async function fetchVendorCredit() {
      const data = await getVendorCreditsById(id);
      setVendorCredit(data ?? null);
    }
    fetchVendorCredit();
  }, [id]);

  const handleDownload = () => {
    if (!vendorCredit) return;

    const doc = new jsPDF({ unit: "pt" });
    const margin = 40;
    let y = margin;

    // Header
    doc.setFontSize(18);
    doc.text(`Vendor Credit #${vendorCredit.creditNoteNumber}`, margin, y);
    y += 30;

    doc.setFontSize(12);
    doc.text(`Vendor: ${vendorCredit.vendorName}`, margin, y);
    y += 18;
    doc.text(
      `Date: ${new Date(vendorCredit.vendorCreditDate).toLocaleDateString()}`,
      margin,
      y
    );
    y += 18;
    if (vendorCredit.orderNumber) {
      doc.text(`Order #: ${vendorCredit.orderNumber}`, margin, y);
      y += 18;
    }
    if (vendorCredit.subject) {
      doc.text(`Subject: ${vendorCredit.subject}`, margin, y);
      y += 18;
    }

    // Line separator
    y += 10;
    doc.line(margin, y, 550, y);
    y += 20;

    // Table header for items
    doc.setFont("helvetica", "bold");
    doc.text("Items", margin, y);
    y += 15;

    const tableColWidths = [120, 100, 60, 60, 60, 80];
    const tableStartX = margin;

    const headers = ["Item Name", "Account", "Qty", "Rate", "Tax", "Amount"];
    headers.forEach((header, i) => {
      doc.text(
        header,
        tableStartX + tableColWidths.slice(0, i).reduce((a, b) => a + b, 0),
        y
      );
    });
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
    vendorCredit.items.forEach((item) => {
      doc.text(item.itemName, tableStartX, y);
      doc.text(item.account, tableStartX + tableColWidths[0], y);
      doc.text(
        item.quantity.toString(),
        tableStartX + tableColWidths[0] + tableColWidths[1],
        y
      );
      doc.text(
        item.rate.toFixed(2),
        tableStartX + tableColWidths[0] + tableColWidths[1] + tableColWidths[2],
        y
      );
      doc.text(
        item.tax.toFixed(2),
        tableStartX +
          tableColWidths[0] +
          tableColWidths[1] +
          tableColWidths[2] +
          tableColWidths[3],
        y
      );
      doc.text(
        item.amount.toFixed(2),
        tableStartX + tableColWidths.slice(0, 5).reduce((a, b) => a + b, 0),
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
    doc.text(`Subtotal: ₱${vendorCredit.subTotal.toFixed(2)}`, margin, y);
    y += 18;

    if (vendorCredit.discount.amount > 0) {
      doc.text(
        `Discount (${vendorCredit.discount.percent}%): -₱${vendorCredit.discount.amount.toFixed(2)}`,
        margin,
        y
      );
      y += 18;
    }

    if (vendorCredit.adjustment !== 0) {
      doc.text(`Adjustment: ₱${vendorCredit.adjustment.toFixed(2)}`, margin, y);
      y += 18;
    }

    doc.text(`Total: ₱${vendorCredit.total.toFixed(2)}`, margin, y);
    y += 25;

    if (vendorCredit.notes) {
      doc.setFont("helvetica", "normal");
      doc.text(`Notes: ${vendorCredit.notes}`, margin, y);
      y += 18;
    }

    doc.save(`VendorCredit-${vendorCredit.creditNoteNumber}.pdf`);
  };

  if (!vendorCredit) {
    return <p className="text-muted">Loading vendor credit...</p>;
  }

  return (
    <div>
      {/* Preview */}
      <div className="card mb-3">
        <div className="card-header">Vendor Credit Preview</div>
        <div className="card-body">
          <h5>Credit Note #{vendorCredit.creditNoteNumber}</h5>
          <p>
            <strong>Vendor:</strong> {vendorCredit.vendorName}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(vendorCredit.vendorCreditDate).toLocaleDateString()}
          </p>
          {vendorCredit.orderNumber && (
            <p>
              <strong>Order #:</strong> {vendorCredit.orderNumber}
            </p>
          )}
          {vendorCredit.subject && (
            <p>
              <strong>Subject:</strong> {vendorCredit.subject}
            </p>
          )}

          <h6>Items</h6>
          {vendorCredit.items.length > 0 ? (
            <ul>
              {vendorCredit.items.map((item) => (
                <li key={item.id}>
                  {item.itemName} — {item.quantity} × {item.rate.toFixed(2)} = ₱
                  {item.amount.toFixed(2)}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items</p>
          )}

          <p>
            <strong>Subtotal:</strong> {vendorCredit.subTotal.toFixed(2)}
          </p>
          {vendorCredit.discount.amount > 0 && (
            <p>
              <strong>Discount:</strong> -
              {vendorCredit.discount.amount.toFixed(2)}
            </p>
          )}
          {vendorCredit.adjustment !== 0 && (
            <p>
              <strong>Adjustment:</strong> {vendorCredit.adjustment.toFixed(2)}
            </p>
          )}
          <p>
            <strong>Total:</strong> {vendorCredit.total.toFixed(2)}
          </p>
          {vendorCredit.notes && (
            <p>
              <strong>Notes:</strong> {vendorCredit.notes}
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
