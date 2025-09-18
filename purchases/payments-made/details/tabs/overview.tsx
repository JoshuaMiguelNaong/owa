import { PaymentMade } from "../../schema-and-types";
import { getPaymentsById } from "../../server-actions";
import Link from "next/link";

export default async function PaymentMadeOverview({ id }: { id: string }) {
  const payment: PaymentMade | undefined = await getPaymentsById(id);

  if (!payment) {
    return (
      <div className="text-center p-4 text-muted">
        <p>No payment found</p>
      </div>
    );
  }

  return (
    <div>
      {/* Top action buttons */}
      <div className="d-flex justify-content-end mb-3">
        <Link
          href={`/admin/v2/purchases/payments-made/new`}
          className="btn btn-sm btn-primary"
        >
          + New Payment
        </Link>

        <Link
          href={`/admin/v2/purchases/payments-made/${payment.id}/edit`}
          className="btn btn-sm btn-outline-primary ms-2"
        >
          Edit
        </Link>
      </div>

      <div className="row">
        {/* Left column */}
        <div className="col-lg-6">
          {/* Payment profile */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <div className="card-title">Payment #{payment.id}</div>
            </div>
            <div className="card-body">
              <h6 className="mb-1 fw-semibold">
                Total Paid: {payment.totalPaid.toFixed(2)}
              </h6>
              <p className="text-muted mb-2">
                Payment Date:{" "}
                {new Date(payment.paymentDate).toLocaleDateString()}
              </p>
              {payment.vendorName && (
                <div className="mb-2">
                  <span className="text-muted">Vendor:</span>{" "}
                  {payment.vendorName}
                </div>
              )}
              {payment.paymentMethod && (
                <div className="mb-2">
                  <span className="text-muted">Payment Method:</span>{" "}
                  {payment.paymentMethod}
                </div>
              )}
              {payment.referenceNumber && (
                <div className="mb-2">
                  <span className="text-muted">Reference #:</span>{" "}
                  {payment.referenceNumber}
                </div>
              )}
            </div>
          </div>

          {/* Notes */}
          {payment.notes && (
            <div className="card custom-card mb-4">
              <div className="card-header">
                <div className="card-title">Notes</div>
              </div>
              <div className="card-body">
                <p className="text-muted mb-0">{payment.notes}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="col-lg-6">
          {/* Totals */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <div className="card-title">Summary</div>
            </div>
            <div className="card-body">
              <div className="mb-2">
                <strong>Total Paid:</strong> {payment.totalPaid.toFixed(2)}
              </div>
              {payment.amountRefunded != null && (
                <div className="mb-2">
                  <strong>Amount Refunded:</strong>{" "}
                  {payment.amountRefunded.toFixed(2)}
                </div>
              )}
              {payment.excessAmount != null && (
                <div className="mb-2">
                  <strong>Excess Amount:</strong>{" "}
                  {payment.excessAmount.toFixed(2)}
                </div>
              )}
              {payment.bankCharges != null && (
                <div className="mb-2">
                  <strong>Bank Charges:</strong>{" "}
                  {payment.bankCharges.toFixed(2)}
                </div>
              )}
              {payment.tdsDeducted != null && (
                <div className="mb-2">
                  <strong>TDS Deducted:</strong>{" "}
                  {payment.tdsDeducted.toFixed(2)}
                </div>
              )}
            </div>
          </div>

          {/* Applied Bills */}
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Applied Bills</div>
            </div>
            <div className="card-body">
              {payment.bills.length > 0 ? (
                <ul className="list-unstyled mb-0">
                  {payment.bills.map((billItem, idx) => (
                    <li key={idx} className="mb-2 border-bottom pb-2">
                      <strong>Bill ID:</strong> {billItem.billId} —{" "}
                      <strong>Amount Paid:</strong>{" "}
                      {billItem.amountPaid.toFixed(2)}
                      {billItem.paymentDate && (
                        <>
                          {" "}
                          • Paid On:{" "}
                          {new Date(billItem.paymentDate).toLocaleDateString()}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted mb-0">No bills applied.</p>
              )}
            </div>
          </div>

          {/* Attachments */}
          {payment.attachments && payment.attachments.length > 0 && (
            <div className="card custom-card mt-4">
              <div className="card-header">
                <div className="card-title">Attachments</div>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {payment.attachments.map((file, idx) => (
                    <li key={idx}>{file}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
