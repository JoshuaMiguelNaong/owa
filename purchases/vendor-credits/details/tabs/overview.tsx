import { VendorCredit } from "../../schema-and-types";
import { getVendorCreditsById } from "../../server-actions";
import Link from "next/link";

export default async function VendorCreditOverview({ id }: { id: string }) {
  const vendorCredit: VendorCredit | undefined = await getVendorCreditsById(id);

  if (!vendorCredit) {
    return (
      <div className="text-center p-4 text-muted">
        <p>No vendor credit found</p>
      </div>
    );
  }

  return (
    <div>
      {/* Top action buttons */}
      <div className="d-flex justify-content-end mb-3">
        <Link
          href={`/admin/v2/purchases/vendor-credits/new`}
          className="btn btn-sm btn-primary"
        >
          + New Vendor Credit
        </Link>

        <Link
          href={`/admin/v2/purchases/vendor-credits/${vendorCredit.id}/edit`}
          className="btn btn-sm btn-outline-primary ms-2"
        >
          Edit
        </Link>
      </div>

      <div className="row">
        {/* Left column */}
        <div className="col-lg-6">
          {/* Vendor Credit profile */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <div className="card-title">
                Vendor Credit #{vendorCredit.creditNoteNumber}
              </div>
            </div>
            <div className="card-body">
              <h6 className="mb-1 fw-semibold">
                Total Amount: {vendorCredit.total.toFixed(2)}
              </h6>
              <p className="text-muted mb-2">
                Credit Date:{" "}
                {new Date(vendorCredit.vendorCreditDate).toLocaleDateString()}
              </p>
              <div className="mb-2">
                <span className="text-muted">Vendor:</span>{" "}
                {vendorCredit.vendorName}
              </div>
              {vendorCredit.orderNumber && (
                <div className="mb-2">
                  <span className="text-muted">Order #:</span>{" "}
                  {vendorCredit.orderNumber}
                </div>
              )}
              {vendorCredit.subject && (
                <div className="mb-2">
                  <span className="text-muted">Subject:</span>{" "}
                  {vendorCredit.subject}
                </div>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Notes</div>
            </div>
            <div className="card-body">
              <p className="text-muted mb-0">{vendorCredit.notes || "—"}</p>
            </div>
          </div>
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
                <strong>Subtotal:</strong> {vendorCredit.subTotal.toFixed(2)}
              </div>
              {vendorCredit.discount.amount > 0 && (
                <div className="mb-2">
                  <strong>Discount:</strong>{" "}
                  {vendorCredit.discount.percent > 0
                    ? `${vendorCredit.discount.percent}% `
                    : ""}
                  (-{vendorCredit.discount.amount.toFixed(2)})
                </div>
              )}
              {vendorCredit.adjustment !== 0 && (
                <div className="mb-2">
                  <strong>Adjustment:</strong>{" "}
                  {vendorCredit.adjustment.toFixed(2)}
                </div>
              )}
              <div className="fw-bold fs-6">
                Total: {vendorCredit.total.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Credited Items</div>
            </div>
            <div className="card-body">
              {vendorCredit.items.length > 0 ? (
                <ul className="list-unstyled mb-0">
                  {vendorCredit.items.map((item) => (
                    <li key={item.id} className="mb-2 border-bottom pb-2">
                      <strong>{item.itemName}</strong> — Qty: {item.quantity} ×{" "}
                      {item.rate.toFixed(2)} = {item.amount.toFixed(2)} (
                      {item.account})
                      {item.tax > 0 && (
                        <span className="text-muted ms-2">
                          + Tax: {item.tax.toFixed(2)}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted mb-0">No items.</p>
              )}
            </div>
          </div>

          {/* Attachments */}
          {vendorCredit.attachments && vendorCredit.attachments.length > 0 && (
            <div className="card custom-card mt-4">
              <div className="card-header">
                <div className="card-title">Attachments</div>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {vendorCredit.attachments.map((file, idx) => (
                    <li key={idx}>
                      <a href={file} target="_blank" rel="noopener noreferrer">
                        {file}
                      </a>
                    </li>
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
