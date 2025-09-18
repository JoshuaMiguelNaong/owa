"use client";

import { useState } from "react";
import { PurchaseOrderFormData } from "../../schema-and-types";

interface PurchaseOrderEmailTabProps {
  purchaseOrder: PurchaseOrderFormData;
}

export default function PurchaseOrderEmailTab({
  purchaseOrder,
}: PurchaseOrderEmailTabProps) {
  const [to, setTo] = useState(purchaseOrder.vendorEmail || "");
  const [subject, setSubject] = useState(
    `Purchase Order #${purchaseOrder.purchaseOrderNumber}`
  );
  const [message, setMessage] = useState(
    `Hello ${purchaseOrder.vendorName},

Please find attached Purchase Order #${purchaseOrder.purchaseOrderNumber} 
dated ${new Date(purchaseOrder.date).toLocaleDateString()}.

Total Amount: ${purchaseOrder.total.toFixed(2)}

Thank you,
[Your Company Name]`
  );

  const handleSend = () => {
    // Replace this with your email send API call
    console.log("Sending email:", { to, subject, message });
    alert("Email sent successfully!");
  };

  return (
    <div className="card custom-card">
      <div className="card-header">
        <div className="card-title">Email Purchase Order</div>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">To</label>
          <input
            type="email"
            className="form-control"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="vendor@example.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={handleSend}>
            Send Email
          </button>
          <button
            className="btn btn-light"
            onClick={() => {
              setTo(purchaseOrder.vendorEmail || "");
              setSubject(
                `Purchase Order #${purchaseOrder.purchaseOrderNumber}`
              );
              setMessage(
                `Hello ${purchaseOrder.vendorName},

Please find attached Purchase Order #${purchaseOrder.purchaseOrderNumber} 
dated ${new Date(purchaseOrder.date).toLocaleDateString()}.

Total Amount: ${purchaseOrder.total.toFixed(2)}

Thank you,
KATALYST`
              );
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
