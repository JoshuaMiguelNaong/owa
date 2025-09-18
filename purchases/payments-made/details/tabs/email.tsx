"use client";

import { useEffect, useState } from "react";
import { PaymentMade } from "../../schema-and-types";
import { getPaymentsById } from "../../server-actions";

export default function PaymentMadeEmail({ id }: { id: string }) {
  const [payment, setPayment] = useState<PaymentMade | null>(null);
  const [toEmail, setToEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchPayment() {
      const data = await getPaymentsById(id);
      if (data) {
        setPayment(data);
        setSubject(`Payment Receipt #${data.id} - ${data.vendorName}`);
        setMessage(
          `Dear ${data.vendorName},\n\nWe have made the payment for your invoice(s). It's been a pleasure doing business with you. We look forward to working with you again. #${data.id}.\n\nTotal Paid: PHP ${data.totalPaid.toFixed(
            2
          )}\n\nThank you.`
        );
      }
    }
    fetchPayment();
  }, [id]);

  const handleSendEmail = () => {
    // Implement your email sending logic here
    alert(
      `Email sent to ${toEmail}!\nSubject: ${subject}\n\nMessage:\n${message}`
    );
  };

  if (!payment) {
    return <p className="text-muted">Loading payment...</p>;
  }

  return (
    <div className="card">
      <div className="card-header">Send Payment Email</div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">To:</label>
          <input
            type="email"
            className="form-control"
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
            placeholder="Enter recipient email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject:</label>
          <input
            type="text"
            className="form-control"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea
            className="form-control"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handleSendEmail}>
          Send Email
        </button>
      </div>
    </div>
  );
}
